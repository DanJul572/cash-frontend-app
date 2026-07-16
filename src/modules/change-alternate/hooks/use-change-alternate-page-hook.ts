import { useTranslation } from 'react-i18next';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { useChangeAlternateMutation } from '../mutations';
import { alternatesQuery } from '../queries';

export default function useChangeAlternatePageHook() {
    const { t } = useTranslation('changeAlternate');
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: users, isLoading, error } = useQuery(alternatesQuery);

    const mutation = useChangeAlternateMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['auth', 'me'] });
            navigate({ to: '/dashboard' });
        },
        onError: () => {},
    });

    const handleUserClick = (userId: string) => {
        mutation.mutate(userId);
    };

    return {
        t,
        users,
        isLoading,
        error,
        mutation,
        handleUserClick,
    };
}
