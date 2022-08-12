import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LoginOutput {
  @Field(() => String, { description: "JWT token" })
  token: string;
}
