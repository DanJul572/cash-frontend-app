import axios from 'axios';

import { isAxios401Error } from '@utils';

import type { router } from '../router';

type AppRouter = typeof router;

let routerInstance: AppRouter | null = null;

export const setRouter = (r: AppRouter) => {
    routerInstance = r;
};

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (isAxios401Error(error)) {
            if (routerInstance) {
                routerInstance.navigate({ to: '/login', replace: true });
            } else {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    },
);

export { axiosInstance };
