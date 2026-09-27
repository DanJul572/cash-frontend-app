import { getHttpClient } from '@zapplib/core';

import { ChangeAlternateEndpoint } from '../endpoints';
import type { SetUserResponseType } from '../types';

export const setUserRequest = async (userId: string) => {
  const response = await getHttpClient().post<SetUserResponseType>(
    ChangeAlternateEndpoint.setUser,
    {
      userId,
    },
  );
  return response.data;
};
