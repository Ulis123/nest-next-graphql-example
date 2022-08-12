import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LogOutOutput {
  @Field(() => Boolean)
  result: boolean;
}
