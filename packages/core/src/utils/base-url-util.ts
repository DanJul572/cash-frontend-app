import { getHttpClient } from '../instances/http-client-instance';

/** Absolute URL of an endpoint, based on the registered HTTP client's `baseURL`. */
export const getApiUrl = (endpoint: string) => {
  return `${getHttpClient().defaults.baseURL ?? ''}${endpoint}`;
};
