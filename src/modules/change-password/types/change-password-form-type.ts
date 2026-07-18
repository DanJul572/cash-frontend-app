import { z } from 'zod';

import type { changePasswordFormSchema } from '../schemas';

export type ChangePasswordFormType = z.input<ReturnType<typeof changePasswordFormSchema>>;
