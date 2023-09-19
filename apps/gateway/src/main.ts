import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración del microservicio RabbitMQ
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ, // Transporte para RabbitMQ
    options: {
      urls: ['amqp://rabbitmq:5672'], // URL de RabbitMQ
      queue: 'gateway_queue', // Nombre de la cola
    },
  });

  const config = new DocumentBuilder()
        .setTitle('Hospitalito')
        .setDescription('API microservice of hospitalito')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  app.enableCors();

  await app.listen(8000);
}
bootstrap();
