import { http, HttpResponse, delay } from 'msw';

import { ChangePasswordEndpoint } from '@modules/change-password/endpoints';
import { getApiUrl } from '@utils';

const mockValidTokenData = {
  status: true,
  message: 'Token is valid',
  data: {
    tokenIsValid: true,
  },
};

export const changePasswordValidateToken200Mock = [
  http.get(`${getApiUrl(ChangePasswordEndpoint.validatePasswordToken)}`, async () => {
    await delay(500);
    return HttpResponse.json(mockValidTokenData);
  }),
];
