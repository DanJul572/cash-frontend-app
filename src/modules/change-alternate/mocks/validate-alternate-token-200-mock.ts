import { http, HttpResponse, delay } from 'msw';

import { ChangeAlternateEndpoint } from '@modules/change-alternate/endpoints';
import { getApiUrl } from '@utils';

const mockValidTokenData = {
    status: true,
    message: 'Token is valid',
    data: {
        tokenIsValid: true,
    },
};

export const authValidateAlternateToken200Mock = [
    http.get(`${getApiUrl(ChangeAlternateEndpoint.validateAlternateToken)}`, async () => {
        await delay(500);
        return HttpResponse.json(mockValidTokenData);
    }),
];
