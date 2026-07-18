import type { GuestConfigResponseType } from '@types';

import { validateOtpFormSchema } from '../schemas';

type ValidateOtpModuleConfigType = GuestConfigResponseType['modules']['validateOtp'];

export const validateOtpRequestMapper = (config: ValidateOtpModuleConfigType) =>
    validateOtpFormSchema(config).transform((data) => ({
        otp: data.otp.join(''),
    }));
