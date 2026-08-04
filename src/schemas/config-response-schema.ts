import z from 'zod';

export const guestConfigResponseSchema = z.object({
  status: z.boolean(),
  message: z.string(),
  data: z.object({
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
  }),
});
