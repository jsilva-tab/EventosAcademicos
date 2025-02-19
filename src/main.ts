// src/main.ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração global de validação
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  // Configuração do CORS
  app.enableCors();

  // Configuração da porta
  const configService = app.get(ConfigService);
  const port = configService.get<number>("PORT") || 3000;

  await app.listen(port);
  console.log(`🚀 Aplicação rodando na porta: ${port}`);
}

bootstrap();
