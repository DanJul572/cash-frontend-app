const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const getApiUrl = (enpoint: string) => {
    return `${apiBaseUrl}${enpoint}`;
};
