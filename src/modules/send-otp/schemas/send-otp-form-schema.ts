import { z } from 'zod';

export const sendOtpFormSchema = z.object({
    email: z
        .string()
        .min(1, 'email.validation.required')
        .refine((value) => z.email().safeParse(value).success, {
            message: 'email.validation.invalidFormat',
        }),
});
