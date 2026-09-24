import { useTranslation } from 'react-i18next';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';

import { dateTimeFormatErrorComponentStyle } from '@styles/datetime-format-error-component-style';
import type { DateTimeFormatErrorComponentPropsType } from '@type-defs/datetime-field-component-type';

export default function DateTimeFormatErrorComponent({
  fieldType,
  format,
  message,
}: DateTimeFormatErrorComponentPropsType) {
  const { t } = useTranslation('common');

  return (
    <Alert severity="error" variant="outlined" sx={dateTimeFormatErrorComponentStyle.alertStyle}>
      <AlertTitle>{t('datetimeFormatInvalidTitle', { fieldType })}</AlertTitle>
      {message}
      <Box component="code" sx={dateTimeFormatErrorComponentStyle.codeStyle}>
        {`dateTimeFormatConfig.${fieldType} = ${JSON.stringify(format)}`}
      </Box>
    </Alert>
  );
}
