import type z from 'zod';

import type { MutateOptions } from '@tanstack/react-query';

import type { sendOtpResponseMapper } from '../mappers';
import type { sendOtpResponseSchema } from '../schemas';
import type { SendOtpFormType } from './send-otp-form-type';

export type SendOtpResponseType = z.input<typeof sendOtpResponseSchema>;
export type SendOtpResponseMappedType = z.output<typeof sendOtpResponseMapper>;

export type PostSendOtpMutationOptionsType = MutateOptions<
    SendOtpResponseMappedType,
    Error,
    SendOtpFormType
>;
