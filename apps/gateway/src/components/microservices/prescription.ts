import {ClientsModule, Transport} from "@nestjs/microservices";

export const PrescriptionMicroservice = ClientsModule.register([
    {
      name: 'PRESCRIPTION_MICROSERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: 'prescription_queue',
      },
    },
]);