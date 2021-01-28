import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { Coin } from './entities/coins.entity';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Get()
  async findAll(): Promise<Coin[]> {
    return await this.coinsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Coin> {
    const coin = await this.coinsService.findOne(id);

    if (!coin) {
      throw new NotFoundException("This Coin doesn't exist");
    }

    return coin;
  }
}
