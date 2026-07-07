import { axiosInstance } from '@instances';

import { RegisterEndpoint } from '../endpoints';
import { registerRequestMapper, registerResponseMapper } from '../mappers';
import type { RegisterFormType, RegisterResponseType } from '../types';

export const postRegisterRequest = async (data: RegisterFormType) => {
    const { confirmPassword: _confirmPassword, ...formData } = data;
    const payloads = registerRequestMapper.parse(formData);
    const response = await axiosInstance.post<RegisterResponseType>(
        RegisterEndpoint.postRegister,
        payloads,
    );
    return registerResponseMapper.parse(response.data);
};
