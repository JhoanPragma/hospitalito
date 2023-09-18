import { Module } from '@nestjs/common';
import { PatientRegistrationController } from './patient-registration.controller';
import { PatientRegistrationService } from './patient-registration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsModule } from './components/patients/patients.module';
import { ParametricsModule } from './components/parametrics/parametrics.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'hospitalito_db',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ParametricsModule,
    PatientsModule,
  ],
  controllers: [PatientRegistrationController],
  providers: [PatientRegistrationService],
})
export class PatientRegistrationModule {}
