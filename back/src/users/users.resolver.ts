import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { JwtAuthGuard } from "src/guards/JwtAuth.guard";
import { AuthenticatedGuard } from "src/guards/Authenticated.guard";
import { ReqWithSession } from "src/auth/decorators/RequestWithSession.decorator";
import { IRequestWithSession } from "src/types/common";

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  registerUser(
    @Args("createUserInput", { type: () => CreateUserInput })
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: "users" })
  findAll() {
    return this.usersService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  @UseGuards(AuthenticatedGuard)
  @Query(() => User)
  me(@ReqWithSession() req: IRequestWithSession): User {
    return req.session.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Query(() => User, { name: "user" })
  findUser(@Args("id", { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthenticatedGuard)
  @Mutation(() => User)
  updateUser(
    @Args("updateUserInput", { type: () => UpdateUserInput })
    updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @UseGuards(AuthenticatedGuard)
  @Mutation(() => User)
  removeUser(@Args("id", { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
