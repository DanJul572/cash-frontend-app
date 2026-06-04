import axios from 'axios';

import type { router } from '../router';

type AppRouter = typeof router;

let routerInstance: AppRouter | null = null;

export const setRouter = (r: AppRouter) => {
    routerInstance = r;
};

const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
});

axiosConfig.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            if (routerInstance) {
                routerInstance.navigate({ to: '/login', replace: true });
            } else {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    },
);

export { axiosConfig };
