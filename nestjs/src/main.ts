import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });
  // app.use(
  //   rateLimit({
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //   }),
  // );
  app.use(cookieParser());
  app.use(helmet());
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
