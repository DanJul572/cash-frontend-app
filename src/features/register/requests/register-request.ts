import { axiosInstance } from '@instances';

import { RegisterEndpoint } from '../endpoints';
import { registerResponseMapper } from '../mappers';
import type { RegisterFormType, RegisterResponseType } from '../types';

export const postRegisterRequest = async (data: RegisterFormType) => {
    const { confirmPassword: _confirmPassword, ...body } = data;
    const response = await axiosInstance.post<RegisterResponseType>(
        RegisterEndpoint.postRegister,
        body,
    );
    return registerResponseMapper.parse(response.data);
};
