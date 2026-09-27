import { validateAlternateTokenResponseSchema } from '../schemas';

export const validateAlternateTokenResponseMapper = validateAlternateTokenResponseSchema.transform(
  (res) => {
    return {
      tokenIsValid: res.data.tokenIsValid,
    };
  },
);
