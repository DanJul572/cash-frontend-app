import type z from 'zod';

import type { changePasswordResponseMapper } from '../mappers';
import type { changePasswordResponseSchema } from '../schemas';

export type ChangePasswordResponseType = z.input<typeof changePasswordResponseSchema>;
export type ChangePasswordResponseMappedType = z.output<typeof changePasswordResponseMapper>;
