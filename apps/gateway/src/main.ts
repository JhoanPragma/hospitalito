import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración del microservicio RabbitMQ
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ, // Transporte para RabbitMQ
    options: {
      urls: ['amqp://localhost:5672'], // URL de RabbitMQ
      queue: 'gateway_queue', // Nombre de la cola
    },
  });

  await app.listen(8000);
}
bootstrap();
