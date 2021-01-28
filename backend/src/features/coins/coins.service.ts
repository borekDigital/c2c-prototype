import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Coin } from './entities/coins.entity';

@Injectable()
export class CoinsService {
  constructor(
    @InjectRepository(Coin)
    private coinsRepository: Repository<Coin>,
  ) {}

  async findAll(): Promise<Coin[]> {
    return await this.coinsRepository.find();
  }

  async findOne(id): Promise<Coin> {
    return await this.coinsRepository.findOne({
      where: { id },
    });
  }
}
