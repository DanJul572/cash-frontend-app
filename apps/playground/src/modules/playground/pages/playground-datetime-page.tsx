import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { DateFieldComponent, DateTimeFieldComponent, TimeFieldComponent } from '@zapplib/ui';

import { usePlaygroundDatetimePageHook } from '../hooks';
import { playgroundDatetimePageStyle } from '../styles';

const FIELD_COMPONENTS = {
  date: DateFieldComponent,
  time: TimeFieldComponent,
  datetime: DateTimeFieldComponent,
};

export default function PlaygroundDatetimePage() {
  const { t, fields, handleReset } = usePlaygroundDatetimePageHook();

  return (
    <Box sx={playgroundDatetimePageStyle.containerStyle}>
      <Box sx={playgroundDatetimePageStyle.headerStyle}>
        <Typography variant="h5">{t('datetimeTitle')}</Typography>
        <Button variant="outlined" onClick={handleReset}>
          {t('reset')}
        </Button>
      </Box>

      {fields.map(({ key, format, value, onChange }) => {
        const FieldComponent = FIELD_COMPONENTS[key];
        return (
          <Paper key={key} variant="outlined" sx={playgroundDatetimePageStyle.cardStyle}>
            <Box sx={playgroundDatetimePageStyle.headerStyle}>
              <Typography variant="subtitle1">{t(`${key}Field`)}</Typography>
              <Chip size="small" label={format || t('emptyFormat')} />
            </Box>
            <FieldComponent label={t(`${key}Field`)} value={value} onChange={onChange} />
            <Typography sx={playgroundDatetimePageStyle.valueStyle}>
              {t('formattedValue')}: {value?.isValid() ? value.format(format) : '-'}
            </Typography>
            <Typography sx={playgroundDatetimePageStyle.valueStyle}>
              {t('isoValue')}: {value?.isValid() ? value.toISOString() : '-'}
            </Typography>
          </Paper>
        );
      })}
    </Box>
  );
}
