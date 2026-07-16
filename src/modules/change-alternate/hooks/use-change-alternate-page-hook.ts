import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { useChangeAlternateMutation } from '../mutations';
import { useChangeAlternateQuery } from '../queries';

export default function useChangeAlternatePageHook() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: users, isLoading, error } = useChangeAlternateQuery();

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
        users,
        isLoading,
        error,
        mutation,
        handleUserClick,
    };
}
