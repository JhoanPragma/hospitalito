import { NestFactory } from '@nestjs/core';
import { MedicalHistoryModule } from './medical-history.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MedicalHistoryModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'], // URL de conexión a RabbitMQ
        queue: 'medical_history_queue', // Nombre de la cola
      },
    },
  );
  
  await app.listen();
}
bootstrap();
