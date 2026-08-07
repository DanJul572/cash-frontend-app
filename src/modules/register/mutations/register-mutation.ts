import { useMutation } from '@tanstack/react-query';

import type { RegisterModuleConfigType } from '@types';

import { registerRequest } from '../requests';
import type { RegisterMutationOptionsType, RegisterFormType } from '../types';

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
