import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { User } from "src/users/entities/user.entity";
import { LoginOutput } from "./dto/login.dto";
import { ChangeEmailInput, ChangePasswordInput } from "./dto/change-credentials.dto";
import { IRequestWithSession } from "src/types/common";
import { LogOutOutput } from "./dto/logout.dto";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.users.findOne({
      where: { email },
      select: ["password"],
    });

    if (!user) {
      throw new BadRequestException("Wrong email");
    }

    const isPassCorrect = await user.checkPassword(password);
    if (!isPassCorrect) {
      throw new BadRequestException("Wrong password");
    }

    return await this.users.findOne({ where: { email } });
  }

  async logIn(
    req: IRequestWithSession,
    { email, password }: { email: string; password: string },
  ): Promise<LoginOutput> {
    const user = await this.validateUser(email, password);
    req.session.user = req.user;
    req.session.isAuthenticated = true;
    req.session.save();
    const payload = { id: user.id };
    return { token: this.jwtService.sign(payload) };
  }

  logOut(req: IRequestWithSession): LogOutOutput {
    req.logout(err => {
      if (err) {
        return { result: false };
      }
      req.session.destroy(err => {
        if (err) {
          this.logger.error("Error while destroying session");
          return { result: false };
        }
        this.logger.log("Session was destroyed");
      });
    });

    return { result: true };
  }

  async changeEmail({ email }: ChangeEmailInput, user: User) {
    const existedUser = await this.users.findOne({
      where: { email: user.email },
    });
    existedUser.email = email;
    return await this.users.save(existedUser);
  }

  async changePassword({ current, newPass, confirm }: ChangePasswordInput, { email }: User) {
    const existedUser = await this.validateUser(email, current);
    if (newPass !== confirm) {
      throw new BadRequestException("new Password and Confirmation Password did not match");
    }
    existedUser.password = newPass;
    return await this.users.save(existedUser);
  }
}
