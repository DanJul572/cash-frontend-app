import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import { pageLoaderComponentStyle } from '@styles';

export default function PageLoaderComponent() {
  const { t } = useTranslation('common');

  return (
    <Fade in timeout={400}>
      <Box sx={pageLoaderComponentStyle.containerStyle}>
        <Box sx={pageLoaderComponentStyle.spinnerWrapperStyle}>
          <CircularProgress size={56} thickness={4} sx={pageLoaderComponentStyle.spinnerStyle} />
        </Box>
        <Typography sx={pageLoaderComponentStyle.labelStyle}>{t('loading')}...</Typography>
      </Box>
    </Fade>
  );
}
