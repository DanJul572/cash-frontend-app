import type z from 'zod';

import type { validatePasswordTokenResponseSchema } from '../schemas';

export type ValidatePasswordTokenResponseType = z.infer<typeof validatePasswordTokenResponseSchema>;
