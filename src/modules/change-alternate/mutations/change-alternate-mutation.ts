import { useMutation } from '@tanstack/react-query';

import { postChangeAlternateRequest } from '../requests';

export const useChangeAlternateMutation = (options: {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}) => {
    return useMutation({
        mutationKey: ['postChangeAlternate'],
        mutationFn: (userId: string) => postChangeAlternateRequest(userId),
        ...options,
    });
};
