import { validatePasswordTokenResponseSchema } from '../schemas';

export const validatePasswordTokenResponseMapper = validatePasswordTokenResponseSchema.transform(
  (res) => {
    return {
      tokenIsValid: res.data.tokenIsValid,
    };
  },
);
