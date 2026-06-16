import { AuthEndpoint } from '@endpoints';
import { axiosInstance } from '@instances';
import { authMeResponseMapper } from '@mappers';
import type { AuthMeResponseType } from '@types';
import { isAxios401Error } from '@utils';

export const authMeRequest = async () => {
    try {
        const response = await axiosInstance.get<AuthMeResponseType>(AuthEndpoint.me);
        const result = authMeResponseMapper.parse(response.data);
        console.log('haha', result);
        return result;
    } catch (error) {
        console.log('error', error);
        if (isAxios401Error(error)) {
            return null;
        }
        throw error;
    }
};
