import { ResourceWithOptions } from 'admin-bro';
import { Coin } from '../../features/coins/entities/coins.entity';

const navigation = {
  name: null,
  icon: 'Product',
};

const coinResource: ResourceWithOptions = {
  resource: Coin,
  options: {
    navigation,
  },
};

export { coinResource };
