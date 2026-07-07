import { z } from 'zod';

import type { registerFormSchema } from '../schemas';

export type RegisterFormType = z.input<typeof registerFormSchema>;
