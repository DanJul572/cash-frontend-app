import axios, { type AxiosInstance } from 'axios';

import { isAxios401Error } from '../utils/is-axios-error-util';

declare module 'axios' {
  interface AxiosRequestConfig {
    _skipAuthRedirect?: boolean;
  }
}

export type HttpClientOptionsType = {
  baseURL: string;
  /** Called on a 401 response unless the request sets `_skipAuthRedirect`. */
  onUnauthorized?: () => void;
};

export const createHttpClient = ({ baseURL, onUnauthorized }: HttpClientOptionsType) => {
  const instance = axios.create({
    baseURL,
    withCredentials: true,
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (isAxios401Error(error) && !error.config?._skipAuthRedirect) {
        onUnauthorized?.();
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

// Set once by whichever app boots (the host or a module running standalone), so modules
// never import an app's axios instance directly.
let httpClient: AxiosInstance | null = null;

export const setHttpClient = (client: AxiosInstance) => {
  httpClient = client;
};

export const getHttpClient = () => {
  if (!httpClient) {
    throw new Error('HTTP client is not set. Call setHttpClient() when bootstrapping the app.');
  }
  return httpClient;
};
