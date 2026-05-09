import { z } from 'zod';

import type { loginMapper } from '../mappers';
import type { loginSchema } from '../schemas';

export type LoginFormType = z.input<typeof loginSchema>;
export type LoginFormMappedType = z.output<typeof loginMapper>;
