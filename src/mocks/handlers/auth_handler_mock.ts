import { http, HttpResponse, delay } from 'msw';

import { AuthEndpoint } from '@endpoints';
import { mockConfig } from '@mocks/mock';
import type { ApiResponseType, AuthMeResponseType } from '@types';

const mockAuthMeData: ApiResponseType<AuthMeResponseType> = {
    status: true,
    message: 'request success',
    data: {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
    },
};

export const authHandlers = [
    http.get(`${mockConfig.baseURL}${AuthEndpoint.me}`, async () => {
        await delay(300);
        return HttpResponse.json(mockAuthMeData);
    }),
];
