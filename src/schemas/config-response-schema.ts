import z from 'zod';

const dateTimeFormatConfigSchema = z.object({
  date: z.string().min(1),
  time: z.string().min(1),
  datetime: z.string().min(1),
});

export const guestConfigResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  data: z.object({
    dateTimeFormat: dateTimeFormatConfigSchema,
    modules: z.object({
      login: z.object({
        minLengthPassword: z.number(),
      }),
      register: z.object({
        minLengthPassword: z.number(),
        minLengthName: z.number(),
      }),
      validateOtp: z.object({
        otpLength: z.number(),
        resendCooldown: z.number(),
      }),
      changePassword: z.object({
        minLengthPassword: z.number(),
      }),
    }),
  }),
});

export const authenticatedConfigResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  data: z.object({
    dataPerPage: z.number(),
    dateTimeFormat: dateTimeFormatConfigSchema,
  }),
});
