import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import DateFieldComponent from '@components/date-field-component';
import DateTimeFieldComponent from '@components/datetime-field-component';
import TimeFieldComponent from '@components/time-field-component';

import { useTestDatetimePageHook } from '../hooks';
import { testDatetimePageStyle } from '../styles';

const FIELD_COMPONENTS = {
  date: DateFieldComponent,
  time: TimeFieldComponent,
  datetime: DateTimeFieldComponent,
};

export default function TestDatetimePage() {
  const { t, fields, handleReset } = useTestDatetimePageHook();

  return (
    <Box sx={testDatetimePageStyle.containerStyle}>
      <Box sx={testDatetimePageStyle.headerStyle}>
        <Typography variant="h5">{t('datetimeTitle')}</Typography>
        <Button variant="outlined" onClick={handleReset}>
          {t('reset')}
        </Button>
      </Box>

      {fields.map(({ key, format, value, onChange }) => {
        const FieldComponent = FIELD_COMPONENTS[key];
        return (
          <Paper key={key} variant="outlined" sx={testDatetimePageStyle.cardStyle}>
            <Box sx={testDatetimePageStyle.headerStyle}>
              <Typography variant="subtitle1">{t(`${key}Field`)}</Typography>
              <Chip size="small" label={format || t('emptyFormat')} />
            </Box>
            <FieldComponent label={t(`${key}Field`)} value={value} onChange={onChange} />
            <Typography sx={testDatetimePageStyle.valueStyle}>
              {t('formattedValue')}: {value?.isValid() ? value.format(format) : '-'}
            </Typography>
            <Typography sx={testDatetimePageStyle.valueStyle}>
              {t('isoValue')}: {value?.isValid() ? value.toISOString() : '-'}
            </Typography>
          </Paper>
        );
      })}
    </Box>
  );
}
