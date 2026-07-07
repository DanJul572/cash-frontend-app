import { axiosInstance } from '@instances';

import { SendOtpEndpoint } from '../endpoints';
import { sendOtpRequestMapper, sendOtpResponseMapper } from '../mappers';
import type { SendOtpFormType, SendOtpResponseType } from '../types';

export const postSendOtpRequest = async (data: SendOtpFormType) => {
    const payloads = sendOtpRequestMapper.parse(data);
    const response = await axiosInstance.post<SendOtpResponseType>(
        SendOtpEndpoint.postSendOtp,
        payloads,
    );
    return sendOtpResponseMapper.parse(response.data);
};
