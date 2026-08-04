import { axiosInstance } from '@instances';
import type { RegisterModuleConfigType } from '@types';

import { RegisterEndpoint } from '../endpoints';
import { registerRequestMapper, registerResponseMapper } from '../mappers';
import type { RegisterFormType, RegisterResponseType } from '../types';

export const postRegisterRequest = async (
  data: RegisterFormType,
  config: RegisterModuleConfigType,
) => {
  const { confirmPassword: _confirmPassword, ...formData } = data;
  const payloads = registerRequestMapper(config).parse(formData);
  const response = await axiosInstance.post<RegisterResponseType>(
    RegisterEndpoint.postRegister,
    payloads,
  );
  return registerResponseMapper.parse(response.data);
};
