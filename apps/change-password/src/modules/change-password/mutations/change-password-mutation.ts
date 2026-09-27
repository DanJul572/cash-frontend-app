import { useMutation } from '@tanstack/react-query';

import { changePasswordRequest } from '../requests';
import type {
  ChangePasswordFormType,
  ChangePasswordModuleConfigType,
  ChangePasswordMutationOptionsType,
} from '../types';

export const useChangePasswordMutation = (
  options: ChangePasswordMutationOptionsType,
  config: ChangePasswordModuleConfigType,
) => {
  return useMutation({
    mutationKey: ['change-password'],
    mutationFn: (data: ChangePasswordFormType) => changePasswordRequest(data, config),
    ...options,
  });
};
