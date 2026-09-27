import { z } from 'zod';

import type { loginFormSchema } from '../schemas';

export type LoginFormType = z.input<ReturnType<typeof loginFormSchema>>;
