import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

import { UI_TRANSLATION_NAMESPACE_CONSTANT } from '../../constants/translation-constant';
import { pageLoaderComponentStyle } from '../../styles/page-loader/page-loader-component-style';

export default function PageLoaderComponent() {
  const { t } = useTranslation(UI_TRANSLATION_NAMESPACE_CONSTANT);

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
