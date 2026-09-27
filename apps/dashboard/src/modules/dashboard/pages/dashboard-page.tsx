import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { DASHBOARD_TRANSLATION_NAMESPACE_CONSTANT } from '../constants';
import { dashboardPageStyle } from '../styles';

export default function DashboardPage() {
  const { t } = useTranslation(DASHBOARD_TRANSLATION_NAMESPACE_CONSTANT);

  return (
    <Box sx={dashboardPageStyle.containerStyle}>
      <Typography variant="h5">{t('title')}</Typography>
      <Typography color="text.secondary">{t('description')}</Typography>
    </Box>
  );
}
