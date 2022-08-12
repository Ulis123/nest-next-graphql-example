import { ExecutionContext, Injectable, CanActivate, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    if (!req.session.isAuthenticated) throw new UnauthorizedException();
    return !!req.session.isAuthenticated;
  }
}
