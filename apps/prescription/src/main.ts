import { NestFactory } from '@nestjs/core';
import { PrescriptionModule } from './prescription.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PrescriptionModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'], // URL de RabbitMQ
        queue: 'prescription_queue', // Nombre de la cola para el microservicio "prescription"
      },
    },
  );

  app.listen();
}
bootstrap();
