import { useState, type MouseEvent } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useRouteContext, useNavigate } from '@tanstack/react-router';

import type { AuthMeResponseType } from '@types';

const useTopbarComponentHook = () => {
  const { user } = useRouteContext({ from: '/_authenticated' }) as {
    user: AuthMeResponseType;
  };
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    queryClient.removeQueries({ queryKey: ['auth', 'me'] });
    navigate({ to: '/login' });
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return {
    user,
    anchorEl,
    open,
    handleOpen,
    handleClose,
    handleLogout,
    getInitials,
  };
};

export default useTopbarComponentHook;
