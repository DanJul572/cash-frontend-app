import type { MutateOptions } from '@tanstack/react-query';

import type { ChangePasswordFormType } from './change-password-form-type';
import type { ChangePasswordResponseMappedType } from './change-password-response-type';

export type ChangePasswordMutationOptionsType = MutateOptions<
  ChangePasswordResponseMappedType,
  Error,
  ChangePasswordFormType
>;
