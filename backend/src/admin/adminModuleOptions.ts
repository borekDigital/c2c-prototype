import { AdminModuleOptions } from '@admin-bro/nestjs/types/interfaces/admin-module-options.interface';

import { coinResource } from './resources/coin.resource';

export const adminModuleOptions: AdminModuleOptions = {
  adminBroOptions: {
    rootPath: '/admin',
    branding: {
      companyName: 'Admin | Change2Collect',
      logo: '/logo.png',
      softwareBrothers: false,
    },
    resources: [coinResource],
  },
};
