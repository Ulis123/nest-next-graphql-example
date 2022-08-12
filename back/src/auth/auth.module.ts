import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JwtModuleOptions } from "@nestjs/jwt/dist/interfaces/jwt-module-options.interface";
import { ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";

import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";
import { AuthSerializer } from "./serialization.provider";

@Module({
  imports: [
    PassportModule.register({
      session: true,
      property: "user",
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get<JwtModuleOptions>("jwtConfig"),
    }),
    UsersModule,
  ],
  providers: [AuthResolver, AuthService, JwtStrategy, LocalStrategy, AuthSerializer],
  exports: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
