import { NestFactory } from "@nestjs/core";
import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as compression from "compression";
import helmet from "helmet";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const logger = new Logger("bootstrap");

  // app.enableCors();

  app.use(compression());
  app.use(
    helmet({
      frameguard: false,
      contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false,
      crossOriginEmbedderPolicy: process.env.NODE_ENV === "production" ? undefined : false,
      // crossOriginOpenerPolicy: false,
      // crossOriginResourcePolicy: false,
      // referrerPolicy: false,
    }),
  );

  const configService = app.get(ConfigService);
  const port = configService.get("PORT");

  await app.listen(port);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
