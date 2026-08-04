import Box from '@mui/material/Box';

import { useTitleHook } from '@hooks';

import { UserCardComponent, UserCardSkeletonComponent } from '../components';
import { useChangeAlternatePageHook } from '../hooks';
import { changeAlternateStyle } from '../styles';

export default function ChangeAlternatePage() {
  useTitleHook('Change Alternate');

  const { users, isLoading, mutation, handleUserClick } = useChangeAlternatePageHook();

  return (
    <Box sx={changeAlternateStyle.containerStyle}>
      <Box sx={changeAlternateStyle.gridStyle}>
        {isLoading ? (
          <UserCardSkeletonComponent />
        ) : (
          users?.map((user) => (
            <UserCardComponent
              key={user.id}
              user={user}
              onClick={handleUserClick}
              isLoading={mutation.isPending}
            />
          ))
        )}
      </Box>
    </Box>
  );
}
