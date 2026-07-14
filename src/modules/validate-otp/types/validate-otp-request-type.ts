import type z from 'zod';

import type { MutateOptions } from '@tanstack/react-query';

import type { validateOtpResponseMapper } from '../mappers';
import type { validateOtpResponseSchema } from '../schemas';
import type { ValidateOtpFormType } from './validate-otp-form-type';

export type ValidateOtpResponseType = z.input<typeof validateOtpResponseSchema>;
export type ValidateOtpResponseMappedType = z.output<typeof validateOtpResponseMapper>;

export type PostValidateOtpMutationOptionsType = MutateOptions<
    ValidateOtpResponseMappedType,
    Error,
    ValidateOtpFormType
>;

export type ResendOtpResponseType = {
    status: boolean;
    message: string;
};

export type PostResendOtpMutationOptionsType = MutateOptions<ResendOtpResponseType, Error, void>;
