import type { MutateOptions } from '@tanstack/react-query';

import type { LoginFormValuesType } from './login-form-values-type';

export type LoginResponseType = {
  status: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export type PostLoginMutationOptionsType = MutateOptions<
  LoginResponseType,
  Error,
  LoginFormValuesType
>;
