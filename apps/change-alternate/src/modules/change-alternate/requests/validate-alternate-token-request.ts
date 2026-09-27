import { getHttpClient } from '@zapplib/core';

import { ChangeAlternateEndpoint } from '../endpoints';
import { validateAlternateTokenResponseMapper } from '../mappers';
import type { ValidateAlternateTokenResponseType } from '../types';

export const validateAlternateTokenRequest = async (token: string) => {
  const response = await getHttpClient().get<ValidateAlternateTokenResponseType>(
    ChangeAlternateEndpoint.validateToken,
    {
      params: { token },
      _skipAuthRedirect: true,
    },
  );
  return validateAlternateTokenResponseMapper.parse(response.data);
};
