import { ClientsModule, Transport } from "@nestjs/microservices";

export const MedicalHistoryMicroservice =  ClientsModule.register([
    {
      name: 'MEDICAL_HISTORY_MICROSERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'medical_history_queue',
      },
    },
]);