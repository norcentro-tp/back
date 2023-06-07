import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT || 3000;
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('NORCENTRO api')
    .setDescription('The NORCENTRO API endpoints')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();