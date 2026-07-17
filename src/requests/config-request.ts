import { ConfigEndpoint } from '@endpoints';
import { axiosInstance } from '@instances';
import {
    authenticatedConfigResponseMapper,
    guestConfigResponseMapper,
} from '@mappers/config-response-mapper';
import type { AuthenticatedConfigResponseType, GuestConfigResponseType } from '@types';

export const configRequest = async () => {
    const response = await axiosInstance.get<GuestConfigResponseType>(ConfigEndpoint.guest);
    const result = guestConfigResponseMapper.parse(response.data);
    return result;
};

export const authenticatedConfigRequest = async () => {
    const response = await axiosInstance.get<AuthenticatedConfigResponseType>(
        ConfigEndpoint.authenticated,
    );
    const result = authenticatedConfigResponseMapper.parse(response.data);
    return result;
};
