import { http, HttpResponse, delay } from 'msw';

import { TreeMenuEndpoint } from '@endpoints';
import type { TreeMenuResponseType } from '@types';
import { getApiUrl } from '@zapplib/core';

const mockTreeMenuData: TreeMenuResponseType = {
  status: true,
  message: 'request success',
  data: {
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        href: '/dashboard',
        icon: 'ic:baseline-dashboard',
      },
      {
        id: 'users',
        label: 'Users',
        icon: 'ic:baseline-people',
        children: [
          { id: 'user-list', label: 'User List', href: '/users', icon: 'ic:baseline-list' },
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
        icon: 'ic:baseline-settings',
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
