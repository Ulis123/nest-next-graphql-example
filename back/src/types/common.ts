import { Session, SessionOptions } from "express-session";
import { createRetriesMiddleware } from "nestjs-session/retriesMiddleware";
import { User } from "src/users/entities/user.entity";

export type TUserDecoratorData = "id" | "email";

export enum Gender {
  MALE,
  FEMALE,
}

export interface ISessionOptions {
  session: SessionOptions;
  retries?: number;
  retriesStrategy?: Parameters<typeof createRetriesMiddleware>[2];
}

export interface ISessionWithData extends Session {
  passport?: any;
  user?: User;
  isAuthenticated?: boolean;
}

interface AuthenticatedRequest extends Request {
  user: User;
}

interface UnauthenticatedRequest extends Request {
  user?: undefined;
}

export interface IRequestWithSession extends Request {
  // These declarations are merged into express's Request type
  login(user: User, done: (err: any) => void): void;
  login(user: User, options: any, done: (err: any) => void): void;
  logIn(user: User, done: (err: any) => void): void;
  logIn(user: User, options: any, done: (err: any) => void): void;

  logout(callback?: (err: unknown) => void): void;
  logOut(callback?: (err: unknown) => void): void;

  isAuthenticated(): this is AuthenticatedRequest;
  isUnauthenticated(): this is UnauthenticatedRequest;

  user?: User;
  session: ISessionWithData;
}
