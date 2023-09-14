import { ClientsModule, Transport } from "@nestjs/microservices";

export const PatientRegistrationMicroservice =  ClientsModule.register([
    {
      name: 'PATIENT_REGISTRATION_MICROSERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'patient_registration_queue',
      },
    },
]);