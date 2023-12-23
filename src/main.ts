import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    //all DTO elements that weren't mentioned will get deleted/removed from the body
    whitelist: true
  }))
  await app.listen(3000);
}
bootstrap();
