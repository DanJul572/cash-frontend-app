import axios from 'axios';

import { LoginEndpoint } from '../endpoints';
import { loginMapper } from '../mappers';
import type { LoginFormValuesType, LoginResponseType } from '../types';

export const postLoginRequest = async (data: LoginFormValuesType) => {
  const body = loginMapper.parse(data);
  const response = await axios.post<LoginResponseType>(
    LoginEndpoint.postLogin,
    body,
  );
  return response.data;
};
