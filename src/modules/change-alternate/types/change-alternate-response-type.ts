import type z from 'zod';

import type { changeAlternateResponseSchema } from '../schemas';

export type ChangeAlternateResponseType = z.input<typeof changeAlternateResponseSchema>;
