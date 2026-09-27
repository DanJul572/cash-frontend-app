import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { remoteModuleLoaderComponentStyle } from '@styles/remote-module-loader/remote-module-loader-component-style';

/** Shown while a page is downloaded from a Module Federation remote. */
export default function RemoteModuleLoaderComponent() {
  const { t } = useTranslation('common');

  return (
    <Box role="status" aria-live="polite" sx={remoteModuleLoaderComponentStyle.containerStyle}>
      <CircularProgress size={40} />
      <Typography sx={remoteModuleLoaderComponentStyle.labelStyle}>
        {t('remoteModuleLoading')}
      </Typography>
    </Box>
  );
}
