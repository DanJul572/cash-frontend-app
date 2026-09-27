import { useEffect } from 'react';

import { useSetUserMutation } from '../mutations';
import { useGetUserQuery, useValidateAlternateTokenQuery } from '../queries';
import type { ChangeAlternatePagePropsType } from '../types';

export default function useChangeAlternatePageHook({
  token,
  onInvalidToken,
  onChangeAlternateSuccess,
}: ChangeAlternatePagePropsType) {
  const tokenQuery = useValidateAlternateTokenQuery(token);
  const isTokenValid = tokenQuery.data?.tokenIsValid === true;
  const isTokenInvalid = !token || tokenQuery.isError || tokenQuery.data?.tokenIsValid === false;

  useEffect(() => {
    if (isTokenInvalid) onInvalidToken();
  }, [isTokenInvalid, onInvalidToken]);

  const { data: users, isLoading, error } = useGetUserQuery(isTokenValid);

  const mutation = useSetUserMutation({
    onSuccess: () => onChangeAlternateSuccess(),
    onError: () => {},
  });

  const handleUserClick = (userId: string) => {
    mutation.mutate(userId);
  };

  return {
    users,
    isLoading: !isTokenValid || isLoading,
    error,
    mutation,
    handleUserClick,
  };
}
