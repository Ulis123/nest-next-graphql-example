import { MiddlewareConsumer, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverAsyncConfig } from "@nestjs/apollo";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ThrottlerModule } from "@nestjs/throttler";
import * as session from "express-session";
import * as passport from "passport";

import configuration from "src/config/configuration";
import { UsersModule } from "src/users/users.module";
import { AuthModule } from "src/auth/auth.module";
import { SkillsModule } from "./skills/skills.module";
import { CategoriesModule } from "./categories/categories.module";

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      expandVariables: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => await configService.get("database"),
    }),
    GraphQLModule.forRootAsync<ApolloDriverAsyncConfig>({
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => await configService.get("graphQL"),
    }),
    UsersModule,
    AuthModule,
    SkillsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // constructor(@Inject(REDIS) private readonly redis: RedisClient) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          // store: new (RedisStore(session))({ client: this.redis, logErrors: true }),
          secret: process.env.JWT_SECRET,
          resave: false,
          saveUninitialized: false,
          cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24, // 24 hours
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes("*");
  }
}
