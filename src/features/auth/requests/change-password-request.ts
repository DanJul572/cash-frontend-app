import { axiosInstance } from '@instances';

import { ChangePasswordEndpoint } from '../endpoints';
import { changePasswordFormMapper, changePasswordResponseMapper } from '../mappers';
import type { ChangePasswordFormType, ChangePasswordResponseType } from '../types';

export const postChangePasswordRequest = async (data: ChangePasswordFormType) => {
    const body = changePasswordFormMapper.parse(data);
    const response = await axiosInstance.post<ChangePasswordResponseType>(
        ChangePasswordEndpoint.postChangePassword,
        body,
    );
    return changePasswordResponseMapper.parse(response.data);
};
