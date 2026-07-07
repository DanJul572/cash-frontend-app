import { z } from 'zod';

import type { sendOtpFormSchema } from '../schemas';

export type SendOtpFormType = z.input<typeof sendOtpFormSchema>;
