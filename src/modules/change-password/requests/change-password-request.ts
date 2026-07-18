import { axiosInstance } from '@instances';
import type { ChangePasswordModuleConfigType } from '@types';

import { ChangePasswordEndpoint } from '../endpoints';
import { changePasswordRequestMapper, changePasswordResponseMapper } from '../mappers';
import type { ChangePasswordFormType, ChangePasswordResponseType } from '../types';

export const postChangePasswordRequest = async (
    data: ChangePasswordFormType,
    config: ChangePasswordModuleConfigType,
) => {
    const requestSchema = changePasswordRequestMapper(config);
    const payloads = requestSchema.parse(data);
    const response = await axiosInstance.post<ChangePasswordResponseType>(
        ChangePasswordEndpoint.postChangePassword,
        payloads,
    );
    return changePasswordResponseMapper.parse(response.data);
};
