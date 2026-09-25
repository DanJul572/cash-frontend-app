import { http, HttpResponse, delay } from 'msw';

import { ConfigEndpoint } from '@endpoints';
import { getApiUrl } from '@utils';

const mockAuthenticatedConfigData = {
  status: true,
  message: 'request success',
  data: {
    dataPerPage: 10,
    dateTimeFormat: {
      date: 'DD/MM/YYYY',
      time: 'HH:mm',
      datetime: 'DD/MM/YYYY HH:mm',
    },
  },
};

export const authenticatedConfigRequest200Mock = [
  http.get(`${getApiUrl(ConfigEndpoint.authenticated)}`, async () => {
    await delay(300);
    return HttpResponse.json(mockAuthenticatedConfigData);
  }),
];
