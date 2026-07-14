import { axiosInstance } from '@instances';

import { ValidateOtpEndpoint } from '../endpoints';
import { validateOtpRequestMapper, validateOtpResponseMapper } from '../mappers';
import type { ResendOtpResponseType, ValidateOtpFormType, ValidateOtpResponseType } from '../types';

export const postValidateOtpRequest = async (data: ValidateOtpFormType) => {
    const payloads = validateOtpRequestMapper.parse(data);
    const response = await axiosInstance.post<ValidateOtpResponseType>(
        ValidateOtpEndpoint.postValidateOtp,
        payloads,
    );
    return validateOtpResponseMapper.parse(response.data);
};

export const postResendOtpRequest = async () => {
    const response = await axiosInstance.post<ResendOtpResponseType>(
        ValidateOtpEndpoint.postResendOtp,
    );
    return response.data;
};
