import axios from 'axios';

import { AuthEndpoint } from '@endpoints';
import { authMeResponseMapper } from '@mappers';
import type { AuthMeResponseType } from '@types';
import { isAxios401Error } from '@utils';

export const authMeRequest = async () => {
    try {
        const response = await axios.get<AuthMeResponseType>(AuthEndpoint.me, {
            withCredentials: true,
        });
        return authMeResponseMapper.parse(response.data);
    } catch (error) {
        if (isAxios401Error(error)) {
            return null;
        }
        throw error;
    }
};
