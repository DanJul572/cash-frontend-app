import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { useSetUserMutation } from '../mutations';
import { useGetUserQuery } from '../queries';

export default function useChangeAlternatePageHook() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: users, isLoading, error } = useGetUserQuery();

  const mutation = useSetUserMutation({
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
