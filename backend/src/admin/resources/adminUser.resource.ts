import { ResourceWithOptions } from 'admin-bro';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';

import { AdminUser } from '../entities/adminUser.entity';

const navigation = {
  name: 'Settings',
  icon: 'Settings',
};

export enum AdminUserAvailable {
  Admin = 'admin',
  Editor = 'editor',
  Author = 'author',
}

const adminUserResource: ResourceWithOptions = {
  resource: AdminUser,

  options: {
    navigation,
    properties: {
      encryptedPassword: {
        isVisible: false,
      },
      password: {
        type: 'string',
        isVisible: {
          list: false,
          edit: true,
          filter: false,
          show: false,
        },
      },
      title: {
        availableValues: [
          {
            value: AdminUserAvailable.Editor,
            label: _.startCase(AdminUserAvailable.Editor),
          },
          {
            value: AdminUserAvailable.Author,
            label: _.startCase(AdminUserAvailable.Author),
          },
        ],
      },
    },
    actions: {
      new: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.title === AdminUserAvailable.Admin,
        before: async (request) => {
          if (request.payload.password) {
            request.payload = {
              ...request.payload,
              encryptedPassword: await bcrypt.hash(
                request.payload.password,
                10,
              ),
              password: undefined,
            };
          }
          return request;
        },
      },
      edit: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.title === AdminUserAvailable.Admin,
      },
      delete: {
        isAccessible: ({ currentAdmin }) =>
          currentAdmin && currentAdmin.title === AdminUserAvailable.Admin,
      },
    },
  },
};

export { adminUserResource };
