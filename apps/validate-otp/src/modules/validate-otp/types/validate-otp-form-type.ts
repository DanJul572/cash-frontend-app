import { z } from 'zod';

import type { validateOtpFormSchema } from '../schemas';

export type ValidateOtpFormType = z.input<ReturnType<typeof validateOtpFormSchema>>;
