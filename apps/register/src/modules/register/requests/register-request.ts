import { getHttpClient } from '@zapplib/core';

import { RegisterEndpoint } from '../endpoints';
import { registerRequestMapper, registerResponseMapper } from '../mappers';
import type { RegisterFormType, RegisterModuleConfigType, RegisterResponseType } from '../types';

export const registerRequest = async (data: RegisterFormType, config: RegisterModuleConfigType) => {
  const { confirmPassword: _confirmPassword, ...formData } = data;
  const payloads = registerRequestMapper(config).parse(formData);
  const response = await getHttpClient().post<RegisterResponseType>(
    RegisterEndpoint.register,
    payloads,
  );
  return registerResponseMapper.parse(response.data);
};
