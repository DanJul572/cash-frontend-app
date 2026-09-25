import { authenticatedConfigResponseSchema, guestConfigResponseSchema } from '@schemas';

export const guestConfigResponseMapper = guestConfigResponseSchema.transform((res) => ({
  dateTimeFormat: {
    date: res.data.dateTimeFormat.date,
    time: res.data.dateTimeFormat.time,
    datetime: res.data.dateTimeFormat.datetime,
  },
  modules: {
    login: {
      minLengthPassword: res.data.modules.login.minLengthPassword,
    },
    register: {
      minLengthPassword: res.data.modules.register.minLengthPassword,
      minLengthName: res.data.modules.register.minLengthName,
    },
    validateOtp: {
      otpLength: res.data.modules.validateOtp.otpLength,
      resendCooldown: res.data.modules.validateOtp.resendCooldown,
    },
    changePassword: {
      minLengthPassword: res.data.modules.changePassword.minLengthPassword,
    },
  },
}));

export const authenticatedConfigResponseMapper = authenticatedConfigResponseSchema.transform(
  (res) => ({
    dataPerPage: res.data.dataPerPage,
    dateTimeFormat: {
      date: res.data.dateTimeFormat.date,
      time: res.data.dateTimeFormat.time,
      datetime: res.data.dateTimeFormat.datetime,
    },
  }),
);
