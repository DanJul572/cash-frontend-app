import axios from 'axios';

import { LoginEndpoint } from '../endpoints';
import { loginMapper, loginResponseMapper } from '../mappers';
import type { LoginFormType, LoginResponseType } from '../types';

export const postLoginRequest = async (data: LoginFormType) => {
  const body = loginMapper.parse(data);
  const response = await axios.post<LoginResponseType>(
    LoginEndpoint.postLogin,
    body,
  );
  return loginResponseMapper.parse(response.data);
};
