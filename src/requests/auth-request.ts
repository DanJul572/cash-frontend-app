import { axiosConfig } from '@configs';
import { AuthEndpoint } from '@endpoints';
import { authMeResponseMapper } from '@mappers';
import type { AuthMeResponseType } from '@types';
import { isAxios401Error } from '@utils';

export const authMeRequest = async () => {
    try {
        const response = await axiosConfig.get<AuthMeResponseType>(AuthEndpoint.me);
        return authMeResponseMapper.parse(response.data);
    } catch (error) {
        if (isAxios401Error(error)) {
            return null;
        }
        throw error;
    }
};
