import { axiosInstance } from '@instances';

import { ChangePasswordEndpoint } from '../endpoints';
import { validatePasswordTokenResponseMapper } from '../mappers';
import type { ValidatePasswordTokenResponseType } from '../types';

export const validatePasswordTokenRequest = async (token: string) => {
    const response = await axiosInstance.get<ValidatePasswordTokenResponseType>(
        ChangePasswordEndpoint.validatePasswordToken,
        {
            params: { token },
            _skipAuthRedirect: true,
        },
    );
    return validatePasswordTokenResponseMapper.parse(response.data);
};
