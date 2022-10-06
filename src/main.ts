import { AllExceptionFilter } from './config/errors/all-exception.filter';
import { HttpExceptionFilter } from './config/errors/http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  //app.useGlobalFilters(new HttpExceptionFilter());
  //app.useGlobalFilters(new AllExceptionFilter());

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
