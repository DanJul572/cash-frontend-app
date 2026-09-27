import type z from 'zod';

import type { getUserResponseSchema } from '../schemas';

export type GetUserResponseType = z.input<typeof getUserResponseSchema>;
