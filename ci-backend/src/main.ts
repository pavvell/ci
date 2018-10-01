import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import {join} from "path";

const server = express();
server.use(express.static(join(__dirname, "../../ci-frontend/dist/ci-frontend")));

async function bootstrap() {
  const app = await NestFactory.create(AppModule, server);
  app.enableCors({
      origin: 'http://localhost:4200',
  });
  await app.listen(3000);
}
bootstrap();
