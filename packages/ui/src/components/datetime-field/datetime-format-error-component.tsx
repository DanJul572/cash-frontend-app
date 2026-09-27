import { useTranslation } from 'react-i18next';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';

import { UI_TRANSLATION_NAMESPACE_CONSTANT } from '../../constants/translation-constant';
import { dateTimeFormatErrorComponentStyle } from '../../styles/datetime-field/datetime-format-error-component-style';
import type { DateTimeFormatErrorComponentPropsType } from '../../types/datetime-field/datetime-field-component-type';

export default function DateTimeFormatErrorComponent({
  fieldType,
  format,
  message,
}: DateTimeFormatErrorComponentPropsType) {
  const { t } = useTranslation(UI_TRANSLATION_NAMESPACE_CONSTANT);

  return (
    <Alert severity="error" variant="outlined" sx={dateTimeFormatErrorComponentStyle.alertStyle}>
      <AlertTitle>{t('datetimeFormatInvalidTitle', { fieldType })}</AlertTitle>
      {message}
      <Box component="code" sx={dateTimeFormatErrorComponentStyle.codeStyle}>
        {`dateTimeFormat.${fieldType} = ${JSON.stringify(format)}`}
      </Box>
    </Alert>
  );
}
