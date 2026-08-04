import { http, HttpResponse, delay } from 'msw';

import { ConfigEndpoint } from '@endpoints';
import { getApiUrl } from '@utils';

export const guestConfigRequest500Mock = [
  http.get(`${getApiUrl(ConfigEndpoint.guest)}`, async () => {
    await delay(300);
    return HttpResponse.json(
      {
        status: false,
        message: 'Internal server error',
      },
      { status: 500 },
    );
  }),
];
