import { Module } from '@nestjs/common';
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
  controllers: [],
  providers: [],
})
export class PatientRegistrationModule {}
