import { NestFactory } from '@nestjs/core';
import { PatientRegistrationModule } from './patient-registration.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PatientRegistrationModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'], // URL de conexión a RabbitMQ
        queue: 'patient_registration_queue', // Nombre de la cola
      },
    },
  );

  await app.listen();
}
bootstrap();
