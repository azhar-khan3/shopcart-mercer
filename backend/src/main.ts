import { NestFactory } from '@nestjs/core';
import bodyParser from 'body-parser';
import { AppModule } from './app.module';
const fileupload = require('express-fileupload'); 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
