import { axiosInstance } from '@instances';

import { ChangeAlternateEndpoint } from '../endpoints';
import type { SetUserResponseType } from '../types';

export const setUserRequest = async (userId: string) => {
  const response = await axiosInstance.post<SetUserResponseType>(ChangeAlternateEndpoint.setUser, {
    userId,
  });
  return response.data;
};
