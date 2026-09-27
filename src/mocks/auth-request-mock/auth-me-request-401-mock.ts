import { http, HttpResponse, delay } from 'msw';

import { AuthEndpoint } from '@endpoints';
import { type ApiResponseType, STATUS_CODE_CONSTANT, getApiUrl } from '@zapplib/core';

const mockAuthMeData: ApiResponseType<null> = {
  status: false,
  message: 'unauthorization',
  data: null,
};

export const authMeRequest401Mock = [
  http.get(`${getApiUrl(AuthEndpoint.me)}`, async () => {
    await delay(300);
    return HttpResponse.json(mockAuthMeData, {
      status: STATUS_CODE_CONSTANT.UNAUTHORIZED,
    });
  }),
];
