import type z from 'zod';

import type { MutateOptions } from '@tanstack/react-query';

import type { forgotPasswordResponseMapper } from '../mappers';
import type { forgotPasswordResponseSchema } from '../schemas';
import type { ForgotPasswordFormType } from './forgot-password-form-type';

export type ForgotPasswordResponseType = z.input<typeof forgotPasswordResponseSchema>;
export type ForgotPasswordResponseMappedType = z.output<typeof forgotPasswordResponseMapper>;

export type PostForgotPasswordMutationOptionsType = MutateOptions<
    ForgotPasswordResponseMappedType,
    Error,
    ForgotPasswordFormType
>;
