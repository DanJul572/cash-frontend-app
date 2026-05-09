import type { MutateOptions } from '@tanstack/react-query';
import type z from 'zod';

import type { loginResponseMapper } from '../mappers';
import type { loginResponseSchema } from '../schemas';
import type { LoginFormType } from './login-form-type';

export type LoginResponseType = z.input<typeof loginResponseSchema>;
export type LoginResponseMappedType = z.output<typeof loginResponseMapper>;

export type PostLoginMutationOptionsType = MutateOptions<
  LoginResponseMappedType,
  Error,
  LoginFormType
>;
