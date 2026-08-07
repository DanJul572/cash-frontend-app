import { useMutation } from '@tanstack/react-query';

import type { ValidateOtpModuleConfigType } from '@types';

import { validateOtpRequest } from '../requests';
import type { ValidateOtpMutationOptionsType, ValidateOtpFormType } from '../types';

export const useValidateOtpMutation = (
  config: ValidateOtpModuleConfigType,
  options: ValidateOtpMutationOptionsType,
) => {
  return useMutation({
    mutationKey: ['validate-otp'],
    mutationFn: (data: ValidateOtpFormType) => validateOtpRequest(data, config),
    ...options,
  });
};
