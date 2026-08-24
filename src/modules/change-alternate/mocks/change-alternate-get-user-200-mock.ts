import { http, HttpResponse, delay } from 'msw';

import { ChangeAlternateEndpoint } from '@modules/change-alternate/endpoints';
import { getApiUrl } from '@utils';

import type { GetUserResponseType } from '../types';

const mockAlternatesData: GetUserResponseType = {
  status: 200,
  message: 'request success',
  data: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      photoUrl: null,
      isCurrentUser: true,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      photoUrl: 'https://i.pravatar.cc/150?u=jane',
      isCurrentUser: false,
    },
    {
      id: '3',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      photoUrl: null,
      isCurrentUser: false,
    },
  ],
};

export const changeAlternateGetUser200Mock = [
  http.get(`${getApiUrl(ChangeAlternateEndpoint.getUser)}`, async () => {
    await delay(500);
    return HttpResponse.json(mockAlternatesData);
  }),
];
