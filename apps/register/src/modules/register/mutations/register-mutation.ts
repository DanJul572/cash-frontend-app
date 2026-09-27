import { useMutation } from '@tanstack/react-query';

import { registerRequest } from '../requests';
import type {
  RegisterFormType,
  RegisterModuleConfigType,
  RegisterMutationOptionsType,
} from '../types';

export const useRegisterMutation = (
  config: RegisterModuleConfigType,
  options: RegisterMutationOptionsType,
) => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: (data: RegisterFormType) => registerRequest(data, config),
    ...options,
  });
};
