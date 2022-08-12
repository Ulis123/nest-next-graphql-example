import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PassportSerializer } from "@nestjs/passport";

import { User } from "src/users/entities/user.entity";

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(@InjectRepository(User) private readonly users: Repository<User>) {
    super();
  }
  serializeUser(user: User, done: (err: Error, user: { id: number }) => void) {
    done(null, { id: user.id });
  }

  async deserializeUser(payload: { id: number }, done: (err: Error, user: Omit<User, "password">) => void) {
    const user = await this.users.findOne({ where: { id: payload.id } });
    done(null, user);
  }
}
