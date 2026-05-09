import { z } from 'zod';

import type { loginSchema } from '../schemas';

export type LoginFormValuesType = z.infer<typeof loginSchema>;
