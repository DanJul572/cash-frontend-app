import { axiosInstance } from '@instances';

import { ForgotPasswordEndpoint } from '../endpoints';
import { forgotPasswordRequestMapper, forgotPasswordResponseMapper } from '../mappers';
import type { ForgotPasswordFormType, ForgotPasswordResponseType } from '../types';

export const forgotPasswordRequest = async (data: ForgotPasswordFormType) => {
  const payloads = forgotPasswordRequestMapper.parse(data);
  const response = await axiosInstance.post<ForgotPasswordResponseType>(
    ForgotPasswordEndpoint.forgotPassword,
    payloads,
  );
  return forgotPasswordResponseMapper.parse(response.data);
};
