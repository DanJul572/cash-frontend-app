import { getHttpClient } from '@zapplib/core';

import { ChangePasswordEndpoint } from '../endpoints';
import { validatePasswordTokenResponseMapper } from '../mappers';
import type { ValidatePasswordTokenResponseType } from '../types';

export const validatePasswordTokenRequest = async (token: string) => {
  const response = await getHttpClient().get<ValidatePasswordTokenResponseType>(
    ChangePasswordEndpoint.validatePasswordToken,
    {
      params: { token },
      _skipAuthRedirect: true,
    },
  );
  return validatePasswordTokenResponseMapper.parse(response.data);
};
