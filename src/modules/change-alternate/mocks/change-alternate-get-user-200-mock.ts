import { http, HttpResponse, delay } from 'msw';

import { ChangeAlternateEndpoint } from '@modules/change-alternate/endpoints';
import { getApiUrl } from '@utils';

const mockAlternatesData = {
  status: 200,
  message: 'request success',
  data: [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      photoUrl: null,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      photoUrl: 'https://i.pravatar.cc/150?u=jane',
    },
    {
      id: '3',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      photoUrl: null,
    },
  ],
};

export const changeAlternateGetUser200Mock = [
  http.get(`${getApiUrl(ChangeAlternateEndpoint.getUser)}`, async () => {
    await delay(500);
    return HttpResponse.json(mockAlternatesData);
  }),
];
