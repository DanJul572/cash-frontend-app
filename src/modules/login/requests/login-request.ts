import { axiosInstance } from '@instances';

import { LoginEndpoint } from '../endpoints';
import { loginRequestMapper, loginResponseMapper } from '../mappers';
import type { LoginFormType, LoginResponseType } from '../types';

export const postLoginRequest = async (data: LoginFormType) => {
    const payloads = loginRequestMapper.parse(data);
    const response = await axiosInstance.post<LoginResponseType>(
        LoginEndpoint.postLogin,
        payloads,
    );
    return loginResponseMapper.parse(response.data);
};
