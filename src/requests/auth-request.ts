import { AuthEndpoint } from '@endpoints';
import { axiosInstance } from '@instances';
import { authMeResponseMapper } from '@mappers';
import type { AuthMeResponseType } from '@types';
import { isAxios401Error } from '@utils';

export const authMeRequest = async () => {
  try {
    const response = await axiosInstance.get<AuthMeResponseType>(AuthEndpoint.me, {
      _skipAuthRedirect: true,
    });
    const result = authMeResponseMapper.parse(response.data);
    return result;
  } catch (error) {
    if (isAxios401Error(error)) {
      return null;
    }
    throw error;
  }
};
