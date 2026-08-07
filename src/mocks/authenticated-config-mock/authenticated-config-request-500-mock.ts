import { http, HttpResponse, delay } from 'msw';

import { ConfigEndpoint } from '@endpoints';
import { getApiUrl } from '@utils';

export const authenticatedConfigRequest500Mock = [
  http.get(`${getApiUrl(ConfigEndpoint.authenticated)}`, async () => {
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
