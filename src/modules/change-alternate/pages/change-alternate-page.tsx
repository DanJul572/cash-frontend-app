import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@hooks';

import { UserCard } from '../components';
import { useChangeAlternatePageHook } from '../hooks';
import { changeAlternateStyle } from '../styles';

export default function ChangeAlternatePage() {
    useTitleHook('Change Alternate');

    const { t, users, isLoading, error, mutation, handleUserClick } = useChangeAlternatePageHook();

    if (isLoading) {
        return (
            <Box sx={changeAlternateStyle.loadingStyle}>
                <CircularProgress />
            </Box>
        );
    }

    console.log(error);
    if (error) {
        return (
            <Box sx={changeAlternateStyle.errorStyle}>
                <Typography color="error">{t('error')}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={changeAlternateStyle.containerStyle}>
            <Typography variant="h5" color="primary">
                {t('title')}
            </Typography>
            <Box sx={changeAlternateStyle.gridStyle}>
                {users?.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                        onClick={handleUserClick}
                        isLoading={mutation.isPending}
                    />
                ))}
            </Box>
        </Box>
    );
}
