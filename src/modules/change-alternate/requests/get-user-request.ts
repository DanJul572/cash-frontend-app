import { axiosInstance } from '@instances';

import { ChangeAlternateEndpoint } from '../endpoints';
import { getUserResponseMapper } from '../mappers';
import type { GetUserResponseType } from '../types';

export const getUserRequest = async () => {
    const response = await axiosInstance.get<GetUserResponseType>(ChangeAlternateEndpoint.getUser);
    return getUserResponseMapper.parse(response.data);
};
