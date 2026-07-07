import { z } from 'zod';

export const forgotPasswordFormSchema = z.object({
    email: z
        .string()
        .min(1, 'email.validation.required')
        .refine((value) => z.string().email().safeParse(value).success, {
            message: 'email.validation.invalidFormat',
        }),
});
