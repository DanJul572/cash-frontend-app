import { z } from 'zod';

import type { forgotPasswordFormSchema } from '../schemas';

export type ForgotPasswordFormType = z.input<typeof forgotPasswordFormSchema>;
