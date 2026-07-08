import { axiosInstance } from '@instances';

import { ChangePasswordEndpoint } from '../endpoints';
import { changePasswordRequestMapper, changePasswordResponseMapper } from '../mappers';
import type { ChangePasswordFormType, ChangePasswordResponseType } from '../types';

export const postChangePasswordRequest = async (data: ChangePasswordFormType) => {
    const payloads = changePasswordRequestMapper.parse(data);
    const response = await axiosInstance.post<ChangePasswordResponseType>(
        ChangePasswordEndpoint.postChangePassword,
        payloads,
    );
    return changePasswordResponseMapper.parse(response.data);
};
