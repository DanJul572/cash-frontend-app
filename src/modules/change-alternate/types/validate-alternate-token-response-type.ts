import type z from 'zod';

import type { validateAlternateTokenResponseSchema } from '../schemas';

export type ValidateAlternateTokenResponseType = z.infer<
    typeof validateAlternateTokenResponseSchema
>;
