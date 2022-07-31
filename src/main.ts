import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  const config = new DocumentBuilder()
    .setTitle('welcome to memorial api list ')
    .setDescription('The memorial API description')
    .setVersion('0.0.1')
    .addTag('apis')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
