import axios from 'axios';

import { STATUS_CODE_CONSTANT } from '@constants';

export const isAxios401ErrorUtil = (error: unknown) => {
    return (
        axios.isAxiosError(error) &&
        error.response?.status === STATUS_CODE_CONSTANT.UNAUTHORIZED
    );
};
