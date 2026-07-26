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
    http.get(
        `${getApiUrl(ChangeAlternateEndpoint.validateAlternateToken)}`,
        async ({ request }) => {
            await delay(500);
            const url = new URL(request.url);
            const token = url.searchParams.get('token');

            if (token === 'valid-token') {
                return HttpResponse.json(mockValidTokenData);
            }

            return HttpResponse.json({
                status: true,
                message: 'Token is invalid',
                data: {
                    tokenIsValid: false,
                },
            });
        },
    ),
];
