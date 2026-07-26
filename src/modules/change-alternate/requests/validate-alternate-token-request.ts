import { axiosInstance } from '@instances';

import { ChangeAlternateEndpoint } from '../endpoints';
import { validateAlternateTokenResponseMapper } from '../mappers';
import type { ValidateAlternateTokenResponseType } from '../types';

export const validateAlternateTokenRequest = async (token: string) => {
    const response = await axiosInstance.get<ValidateAlternateTokenResponseType>(
        ChangeAlternateEndpoint.validateAlternateToken,
        {
            params: { token },
            _skipAuthRedirect: true,
        },
    );
    return validateAlternateTokenResponseMapper.parse(response.data);
};
