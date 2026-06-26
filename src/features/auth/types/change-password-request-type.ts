import type z from 'zod';

import type { MutateOptions } from '@tanstack/react-query';

import type { changePasswordResponseMapper } from '../mappers';
import type { changePasswordResponseSchema } from '../schemas';
import type { ChangePasswordFormType } from './change-password-form-type';

export type ChangePasswordResponseType = z.input<typeof changePasswordResponseSchema>;
export type ChangePasswordResponseMappedType = z.output<typeof changePasswordResponseMapper>;

export type PostChangePasswordMutationOptionsType = MutateOptions<
    ChangePasswordResponseMappedType,
    Error,
    ChangePasswordFormType
>;
