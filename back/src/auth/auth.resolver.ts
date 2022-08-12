import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { LoginOutput } from "./dto/login.dto";
import { ChangeEmailInput, ChangePasswordInput } from "./dto/change-credentials.dto";
import { User } from "src/users/entities/user.entity";
import { CurrentUser } from "./decorators/CurrentUser.decorator";
import { JwtAuthGuard } from "src/guards/JwtAuth.guard";
import { ReqWithSession } from "./decorators/RequestWithSession.decorator";
import { LocalAuthGuard } from "src/guards/LocalAuth.guard";
import { AuthenticatedGuard } from "src/guards/Authenticated.guard";
import { IRequestWithSession } from "src/types/common";
import { LogOutOutput } from "./dto/logout.dto";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation(() => LoginOutput)
  async logIn(
    @Args("email", { type: () => String }) email: string,
    @Args("password", { type: () => String }) password: string,
    @ReqWithSession() req: IRequestWithSession,
  ): Promise<LoginOutput> {
    return await this.authService.logIn(req, { email, password });
  }

  @UseGuards(AuthenticatedGuard)
  @Mutation(() => LogOutOutput)
  logOut(@ReqWithSession() req: IRequestWithSession): LogOutOutput {
    return this.authService.logOut(req);
  }

  @UseGuards(AuthenticatedGuard)
  @Mutation(() => User)
  changeEmail(
    @Args("changeEmailInput", { type: () => ChangeEmailInput })
    changeEmailInput: ChangeEmailInput,
    @CurrentUser() user: User,
  ) {
    return this.authService.changeEmail(changeEmailInput, user);
  }

  @UseGuards(AuthenticatedGuard)
  @Mutation(() => User)
  changePassword(
    @Args("changePasswordInput", { type: () => ChangePasswordInput })
    changePasswordInput: ChangePasswordInput,
    @CurrentUser() user: User,
  ) {
    return this.authService.changePassword(changePasswordInput, user);
  }
}
