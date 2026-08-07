import { http, HttpResponse, delay } from 'msw';

import { TreeMenuEndpoint } from '@endpoints';
import type { TreeMenuResponseType } from '@types';
import { getApiUrl } from '@utils';

const mockTreeMenuData: TreeMenuResponseType = {
  status: true,
  message: 'request success',
  data: {
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/dashboard',
      },
      {
        id: 'users',
        label: 'Users',
        children: [
          { id: 'user-list', label: 'User List', href: '/users' },
          {
            id: 'user-register',
            label: 'User Register',
            href: '/users/register',
          },
        ],
      },
      {
        id: 'settings',
        label: 'Settings',
        children: [
          { id: 'general', label: 'General', href: '/settings/general' },
          { id: 'security', label: 'Security', href: '/settings/security' },
        ],
      },
    ],
  },
};

export const treeMenuRequest200Mock = [
  http.get(`${getApiUrl(TreeMenuEndpoint.treeMenu)}`, async () => {
    await delay(1000);
    return HttpResponse.json(mockTreeMenuData);
  }),
];
