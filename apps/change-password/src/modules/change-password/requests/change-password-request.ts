import { getHttpClient } from '@zapplib/core';

import { ChangePasswordEndpoint } from '../endpoints';
import { changePasswordRequestMapper, changePasswordResponseMapper } from '../mappers';
import type {
  ChangePasswordFormType,
  ChangePasswordModuleConfigType,
  ChangePasswordResponseType,
} from '../types';

export const changePasswordRequest = async (
  data: ChangePasswordFormType,
  config: ChangePasswordModuleConfigType,
) => {
  const requestSchema = changePasswordRequestMapper(config);
  const payloads = requestSchema.parse(data);
  const response = await getHttpClient().post<ChangePasswordResponseType>(
    ChangePasswordEndpoint.changePassword,
    payloads,
  );
  return changePasswordResponseMapper.parse(response.data);
};
