import { http, HttpResponse, delay } from 'msw';

import { AuthEndpoint } from '@endpoints';
import type { ApiResponseType, AuthMeResponseType } from '@types';
import { getApiUrl } from '@utils';

const mockAuthMeData: ApiResponseType<AuthMeResponseType> = {
    status: true,
    message: 'request success',
    data: {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
    },
};

export const authMock = [
    http.get(`${getApiUrl(AuthEndpoint.me)}`, async () => {
        await delay(300);
        return HttpResponse.json(mockAuthMeData);
    }),
];
