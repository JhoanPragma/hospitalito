import { Module } from '@nestjs/common';
import { PrescriptionDispersionsModule } from './components/prescription-dispersions/prescription-dispersions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicinesModule } from './components/medicines/medicines.module';

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
    PrescriptionDispersionsModule,
    MedicinesModule,
  ],
  controllers: [],
  providers: [],
})
export class PharmacyModule {}
