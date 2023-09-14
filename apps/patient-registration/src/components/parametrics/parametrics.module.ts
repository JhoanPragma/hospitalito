import { Module } from '@nestjs/common';
import { ParametricsService } from './parametrics.service';
import { ParametricsController } from './parametrics.controller';

@Module({
  controllers: [ParametricsController],
  providers: [ParametricsService],
})
export class ParametricsModule {}
