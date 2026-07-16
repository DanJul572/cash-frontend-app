import { axiosInstance } from '@instances';

import { ChangeAlternateEndpoint } from '../endpoints';
import { changeAlternateResponseMapper } from '../mappers';
import type { ChangeAlternateResponseType } from '../types';

export const getAlternatesRequest = async () => {
    const response = await axiosInstance.get<ChangeAlternateResponseType>(
        ChangeAlternateEndpoint.getAlternates,
    );
    return changeAlternateResponseMapper.parse(response.data);
};

export const postChangeAlternateRequest = async (userId: string) => {
    const response = await axiosInstance.post(ChangeAlternateEndpoint.postChangeAlternate, {
        userId,
    });
    return response.data;
};
