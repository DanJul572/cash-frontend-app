import { axiosInstance } from '@instances';
import type { LoginModuleConfigType } from '@types';

import { LoginEndpoint } from '../endpoints';
import { loginRequestMapper, loginResponseMapper } from '../mappers';
import type { LoginFormType, LoginResponseType } from '../types';

export const loginRequest = async (data: LoginFormType, config: LoginModuleConfigType) => {
  const payloads = loginRequestMapper(config).parse(data);
  const response = await axiosInstance.post<LoginResponseType>(LoginEndpoint.login, payloads);
  return loginResponseMapper.parse(response.data);
};
