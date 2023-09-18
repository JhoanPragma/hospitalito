import { ClientsModule, Transport } from "@nestjs/microservices";

export const PharmacyMicroservice = ClientsModule.register([
    {
      name: 'PHARMACY_MICROSERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: 'pharmacy_queue',
      },
    },
  ]);