import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@hooks';

import { UserCardComponent } from '../components';
import { useChangeAlternatePageHook } from '../hooks';
import { changeAlternateStyle } from '../styles';

export default function ChangeAlternatePage() {
    const { t } = useTranslation('changeAlternate');

    useTitleHook('Change Alternate');

    const { users, isLoading, error, mutation, handleUserClick } = useChangeAlternatePageHook();

    if (isLoading) {
        return (
            <Box sx={changeAlternateStyle.loadingStyle}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={changeAlternateStyle.errorStyle}>
                <Typography color="error">{t('error')}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={changeAlternateStyle.containerStyle}>
            <Box sx={changeAlternateStyle.gridStyle}>
                {users?.map((user) => (
                    <UserCardComponent
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
