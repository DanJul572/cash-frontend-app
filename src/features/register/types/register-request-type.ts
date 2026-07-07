import type z from 'zod';

import type { MutateOptions } from '@tanstack/react-query';

import type { registerResponseMapper } from '../mappers';
import type { registerResponseSchema } from '../schemas';
import type { RegisterFormType } from './register-form-type';

export type RegisterResponseType = z.input<typeof registerResponseSchema>;
export type RegisterResponseMappedType = z.output<typeof registerResponseMapper>;

export type PostRegisterMutationOptionsType = MutateOptions<
    RegisterResponseMappedType,
    Error,
    RegisterFormType
>;
