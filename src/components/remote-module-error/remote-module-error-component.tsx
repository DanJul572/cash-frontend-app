import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { remoteModuleErrorComponentStyle } from '@styles/remote-module-error/remote-module-error-component-style';

/** Route error fallback for pages loaded from a Module Federation remote that is unreachable. */
export default function RemoteModuleErrorComponent() {
  const { t } = useTranslation('common');

  return (
    <Box sx={remoteModuleErrorComponentStyle.containerStyle}>
      <Typography variant="h6">{t('remoteModuleUnavailable')}</Typography>
      <Typography variant="body2" color="text.secondary">
        {t('remoteModuleUnavailableDescription')}
      </Typography>
      {/* A failed remote import is cached by the browser session, so retry with a full reload */}
      <Button variant="contained" onClick={() => window.location.reload()}>
        {t('retry')}
      </Button>
    </Box>
  );
}
