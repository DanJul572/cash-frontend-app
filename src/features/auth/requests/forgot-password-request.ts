import { axiosInstance } from '@instances';

import { ForgotPasswordEndpoint } from '../endpoints';
import { forgotPasswordFormMapper, forgotPasswordResponseMapper } from '../mappers';
import type { ForgotPasswordFormType, ForgotPasswordResponseType } from '../types';

export const postForgotPasswordRequest = async (data: ForgotPasswordFormType) => {
    const body = forgotPasswordFormMapper.parse(data);
    const response = await axiosInstance.post<ForgotPasswordResponseType>(
        ForgotPasswordEndpoint.postForgotPassword,
        body,
    );
    return forgotPasswordResponseMapper.parse(response.data);
};
