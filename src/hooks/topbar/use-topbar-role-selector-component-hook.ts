import { useState, type MouseEvent } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouteContext } from '@tanstack/react-router';

import { authMeQuery } from '@queries';
import type { AuthMeResponseType } from '@types';

const useTopbarRoleSelectorComponentHook = () => {
  const { user: contextUser } = useRouteContext({ from: '/_authenticated' }) as {
    user: AuthMeResponseType;
  };
  const queryClient = useQueryClient();
  // Read from the query cache so the active role re-renders after it is changed.
  const { data: user } = useQuery(authMeQuery);

  const roles = (user ?? contextUser).role;
  const activeRole = roles.find((role) => role.isActive) ?? roles[0];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectRole = (roleId: number) => {
    queryClient.setQueryData(authMeQuery.queryKey, (prev) =>
      prev
        ? {
            ...prev,
            role: prev.role.map((role) => ({ ...role, isActive: role.roleId === roleId })),
          }
        : prev,
    );
    handleClose();
  };

  return {
    roles,
    activeRole,
    anchorEl,
    open,
    handleOpen,
    handleClose,
    handleSelectRole,
  };
};

export default useTopbarRoleSelectorComponentHook;
