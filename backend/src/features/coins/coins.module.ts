import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';
import { Coin } from './entities/coins.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coin])],
  controllers: [CoinsController],
  providers: [CoinsService],
})
export class CoinsModule {}
