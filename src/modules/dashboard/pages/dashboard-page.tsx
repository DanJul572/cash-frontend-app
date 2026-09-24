import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { dashboardPageStyle } from '../styles';

export default function DashboardPage() {
  const { t } = useTranslation('common');

  return (
    <Box sx={dashboardPageStyle.containerStyle}>
      <Typography variant="h5">{t('dashboard')}</Typography>
      <Typography color="text.secondary">{t('dashboardDescription')}</Typography>
    </Box>
  );
}
