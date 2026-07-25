import { useMutation } from '@tanstack/react-query';

import { postChangeAlternateRequest } from '../requests';
import type { PostChangeAlternateMutationOptionsType } from '../types';

export const useChangeAlternateMutation = (options: PostChangeAlternateMutationOptionsType) => {
    return useMutation({
        mutationKey: ['postChangeAlternate'],
        mutationFn: (userId: string) => postChangeAlternateRequest(userId),
        ...options,
    });
};
