import { http, HttpResponse, delay } from 'msw';

import { ConfigEndpoint } from '@endpoints';
import { getApiUrl } from '@utils';

const mockGuestConfigData = {
  status: true,
  message: 'request success',
  data: {
    modules: {
      login: {
        minLengthPassword: 10,
      },
      register: {
        minLengthPassword: 10,
        minLengthName: 3,
      },
      validateOtp: {
        otpLength: 6,
        resendCooldown: 30,
      },
      changePassword: {
        minLengthPassword: 10,
      },
    },
  },
};

export const guestConfigRequest200Mock = [
  http.get(`${getApiUrl(ConfigEndpoint.guest)}`, async () => {
    await delay(300);
    return HttpResponse.json(mockGuestConfigData);
  }),
];
