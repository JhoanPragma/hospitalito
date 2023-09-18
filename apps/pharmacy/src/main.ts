import { NestFactory } from '@nestjs/core';
import { PharmacyModule } from './pharmacy.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PharmacyModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'], // URL de conexión a RabbitMQ
        queue: 'pharmacy_queue', // Nombre de la cola
      },
    },
  );

  await app.listen();
}
bootstrap();
