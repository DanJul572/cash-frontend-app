import { getHttpClient } from '@zapplib/core';

import { ChangeAlternateEndpoint } from '../endpoints';
import { getUserResponseMapper } from '../mappers';
import type { GetUserResponseType } from '../types';

export const getUserRequest = async () => {
  const response = await getHttpClient().get<GetUserResponseType>(ChangeAlternateEndpoint.getUser);
  return getUserResponseMapper.parse(response.data);
};
