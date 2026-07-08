import type { PropsWithChildren } from 'react';

export const useTranslation = () => {
    return {
        t: (key: string, params?: Record<string, string>) => {
            if (!params) return key;

            return Object.entries(params).reduce(
                (acc, [paramKey, value]) => acc.replace(`{{${paramKey}}}`, String(value)),
                key,
            );
        },

        i18n: {
            changeLanguage: async () => Promise.resolve(),
            language: 'en',
        },
    };
};

export const Trans = ({ children }: PropsWithChildren) => children;

export default {
    useTranslation,
};
