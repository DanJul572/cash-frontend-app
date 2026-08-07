import { axiosInstance } from '@instances';
import type { ValidateOtpModuleConfigType } from '@types';

import { ValidateOtpEndpoint } from '../endpoints';
import { validateOtpRequestMapper, validateOtpResponseMapper } from '../mappers';
import type { ResendOtpResponseType, ValidateOtpFormType, ValidateOtpResponseType } from '../types';

export const validateOtpRequest = async (
  data: ValidateOtpFormType,
  config: ValidateOtpModuleConfigType,
) => {
  const payloads = validateOtpRequestMapper(config).parse(data);
  const response = await axiosInstance.post<ValidateOtpResponseType>(
    ValidateOtpEndpoint.validateOtp,
    payloads,
  );
  return validateOtpResponseMapper.parse(response.data);
};

export const resendOtpRequest = async () => {
  const response = await axiosInstance.post<ResendOtpResponseType>(ValidateOtpEndpoint.resendOtp);
  return response.data;
};
