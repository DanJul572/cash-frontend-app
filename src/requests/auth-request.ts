import axios from 'axios';

import { STATUS_CODE_CONSTANT } from '@/constants';
import { AuthEndpoint } from '@/endpoints';
import { authMeResponseMapper } from '@/mappers';
import type { AuthMeResponseType } from '@/types';

export const authMeRequest = async () => {
    try {
        const response = await axios.get<AuthMeResponseType>(AuthEndpoint.me, {
            withCredentials: true,
        });
        return authMeResponseMapper.parse(response.data);
    } catch (error) {
        if (
            axios.isAxiosError(error) &&
            error.response?.status === STATUS_CODE_CONSTANT.UNAUTHORIZED
        ) {
            return null;
        }
        throw error;
    }
};
