// import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { JwtModuleOptions } from "@nestjs/jwt";
import { ApolloDriverConfig } from "@nestjs/apollo";

interface INestConfig {
  port: number;
  database: TypeOrmModuleOptions;
  graphQL: ApolloDriverConfig;
  jwtConfig: JwtModuleOptions;
}

export default (): INestConfig => ({
  port: parseInt(process.env.PORT, 10) ?? 5000,
  database: {
    type: process.env.DB_CONNECTION as "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) ?? 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // entities: ['dist/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV === "development",
    migrationsRun: true,
    migrations: ["dist/**/migrations/*{.ts,.js}"],
    migrationsTableName: "migrations",
    logging: process.env.NODE_ENV === "development",
    cache: true,
  },
  graphQL: {
    cors: {
      origin: process.env.FRONT_APP_URL,
      credentials: true,
    },
    autoSchemaFile: "schema.gql",
    sortSchema: true,
    playground: {
      settings: {
        "request.credentials": "include",
      },
    },
    // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    // context: (req, connection) => {
    //   const TOKEN_KEY = 'x-jwt';
    //   return { token: req ? req.headers[TOKEN_KEY] : connection.context[TOKEN_KEY] };
    // },
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: "1d" },
  },
});
