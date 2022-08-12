import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

import { TUserDecoratorData } from "src/types/common";

export const CurrentUser = createParamDecorator((data: TUserDecoratorData | undefined, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  const { user } = ctx.getContext().req;
  if (data) {
    return user[data];
  }
  return user;
});
