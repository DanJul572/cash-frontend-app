import { http, HttpResponse, delay } from 'msw';

import { getApiUrl } from '@zapplib/core';

const mockValidTokenData = {
  status: true,
  message: 'Token is valid',
  data: {
    tokenIsValid: true,
  },
};

export const changePasswordValidateToken200Mock = [
  http.get(`${getApiUrl('/change-password/validate-token')}`, async () => {
    await delay(500);
    return HttpResponse.json(mockValidTokenData);
  }),
];
