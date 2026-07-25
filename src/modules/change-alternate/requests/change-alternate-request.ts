import { axiosInstance } from '@instances';

import { ChangeAlternateEndpoint } from '../endpoints';
import { changeAlternateResponseMapper } from '../mappers';
import type { ChangeAlternatePostResponseType, ChangeAlternateResponseType } from '../types';

export const getAlternatesRequest = async () => {
    const response = await axiosInstance.get<ChangeAlternateResponseType>(
        ChangeAlternateEndpoint.getAlternates,
    );
    return changeAlternateResponseMapper.parse(response.data);
};

export const postChangeAlternateRequest = async (userId: string) => {
    const response = await axiosInstance.post<ChangeAlternatePostResponseType>(
        ChangeAlternateEndpoint.postChangeAlternate,
        {
            userId,
        },
    );
    return response.data;
};
