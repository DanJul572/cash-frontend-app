import { z } from 'zod';

import type { loginFormMapper } from '../mappers';
import type { loginFormSchema } from '../schemas';

export type LoginFormType = z.input<typeof loginFormSchema>;
export type LoginFormMappedType = z.output<typeof loginFormMapper>;
