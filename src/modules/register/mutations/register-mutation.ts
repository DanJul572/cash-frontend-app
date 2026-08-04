import { useMutation } from '@tanstack/react-query';

import type { RegisterModuleConfigType } from '@types';

import { postRegisterRequest } from '../requests';
import type { PostRegisterMutationOptionsType, RegisterFormType } from '../types';

export const usePostRegisterMutation = (
  config: RegisterModuleConfigType,
  options: PostRegisterMutationOptionsType,
) => {
  return useMutation({
    mutationKey: ['postRegister'],
    mutationFn: (data: RegisterFormType) => postRegisterRequest(data, config),
    ...options,
  });
};
