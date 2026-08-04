import { validateOtpResponseSchema } from '../schemas';

export const validateOtpResponseMapper = validateOtpResponseSchema.transform((res) => ({
  valid: res.data.valid,
}));
