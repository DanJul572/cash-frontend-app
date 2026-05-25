export const useTranslation = () => {
    return {
        t: (key: string, params?: Record<string, any>) => {
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

export const Trans = ({ children }: any) => children;

export default {
    useTranslation,
};
