import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreatmentsModule } from './components/treatments/treatments.module';

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
    TreatmentsModule],
  controllers: [],
  providers: [],
})
export class MedicalHistoryModule {}
