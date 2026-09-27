import { useMutation } from '@tanstack/react-query';

import { validateOtpRequest } from '../requests';
import type {
  ValidateOtpFormType,
  ValidateOtpModuleConfigType,
  ValidateOtpMutationOptionsType,
} from '../types';

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
