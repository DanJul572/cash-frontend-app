import { getHttpClient } from '@zapplib/core';

import { ValidateOtpEndpoint } from '../endpoints';
import { validateOtpRequestMapper, validateOtpResponseMapper } from '../mappers';
import type {
  ResendOtpResponseType,
  ValidateOtpFormType,
  ValidateOtpModuleConfigType,
  ValidateOtpResponseType,
} from '../types';

export const validateOtpRequest = async (
  data: ValidateOtpFormType,
  config: ValidateOtpModuleConfigType,
) => {
  const payloads = validateOtpRequestMapper(config).parse(data);
  const response = await getHttpClient().post<ValidateOtpResponseType>(
    ValidateOtpEndpoint.validateOtp,
    payloads,
  );
  return validateOtpResponseMapper.parse(response.data);
};

export const resendOtpRequest = async () => {
  const response = await getHttpClient().post<ResendOtpResponseType>(ValidateOtpEndpoint.resendOtp);
  return response.data;
};
