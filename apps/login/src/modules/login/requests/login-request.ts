import { getHttpClient } from '@zapplib/core';

import { LoginEndpoint } from '../endpoints';
import { loginRequestMapper, loginResponseMapper } from '../mappers';
import type { LoginFormType, LoginModuleConfigType, LoginResponseType } from '../types';

export const loginRequest = async (data: LoginFormType, config: LoginModuleConfigType) => {
  const payloads = loginRequestMapper(config).parse(data);
  const response = await getHttpClient().post<LoginResponseType>(LoginEndpoint.login, payloads);
  return loginResponseMapper.parse(response.data);
};
