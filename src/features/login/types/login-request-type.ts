import type { MutateOptions } from '@tanstack/react-query';
import type z from 'zod';

import type { loginResponseMapper } from '../mappers';
import type { loginResponseSchema } from '../schemas';
import type { LoginFormValuesType } from './login-form-values-type';

export type LoginResponseType = z.input<typeof loginResponseSchema>;
export type LoginResponseMappedType = z.output<typeof loginResponseMapper>;

export type PostLoginMutationOptionsType = MutateOptions<
  LoginResponseMappedType,
  Error,
  LoginFormValuesType
>;
