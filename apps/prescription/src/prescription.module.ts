import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrescriptionsModule } from './components/prescriptions/prescriptions.module';

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
    PrescriptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class PrescriptionModule {}
