import { ConfigEndpoint } from '@endpoints';
import { axiosInstance } from '@instances';
import { configResponseMapper } from '@mappers/config-response-mapper';
import type { ConfigResponseType } from '@types';

export const configRequest = async () => {
    const response = await axiosInstance.get<ConfigResponseType>(ConfigEndpoint.configs);
    const result = configResponseMapper.parse(response.data);
    return result;
};
