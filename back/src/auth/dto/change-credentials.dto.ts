import { Field, ID, InputType, PickType } from "@nestjs/graphql";
import { User } from "../../users/entities/user.entity";
import { IsString } from "class-validator";

@InputType()
export class ChangeEmailInput extends PickType(User, ["email"]) {}

@InputType()
export class ChangePasswordInput {
  @Field(() => String, { nullable: false })
  @IsString()
  current: string;

  @Field(() => String, { nullable: false })
  @IsString()
  newPass: string;

  @Field(() => String, { nullable: false })
  @IsString()
  confirm: string;
}
