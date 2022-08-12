import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly users: Repository<User>) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.users.save(this.users.create(createUserInput));
  }

  async findAll(): Promise<User[]> {
    return await this.users.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.users.findOneOrFail({ where: { id } });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return await this.users.update(id, updateUserInput);
  }

  async remove(id: number) {
    return await this.users.delete(id);
  }
}
