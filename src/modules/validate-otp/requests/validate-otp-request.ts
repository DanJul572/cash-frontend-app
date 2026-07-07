import { axiosInstance } from '@instances';

import { ValidateOtpEndpoint } from '../endpoints';
import { validateOtpRequestMapper, validateOtpResponseMapper } from '../mappers';
import type { ValidateOtpFormType, ValidateOtpResponseType } from '../types';

export const postValidateOtpRequest = async (data: ValidateOtpFormType) => {
    const payloads = validateOtpRequestMapper.parse(data);
    const response = await axiosInstance.post<ValidateOtpResponseType>(
        ValidateOtpEndpoint.postValidateOtp,
        payloads,
    );
    return validateOtpResponseMapper.parse(response.data);
};
