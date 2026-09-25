import { useTranslation } from 'react-i18next';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import useZTableFilterFieldComponentHook from '@hooks/ztable/use-ztable-filter-field-component-hook';
import type { FilterFieldComponentPropsType } from '@type-defs/ztable/ztable-filter-toolbar-component-type';

import DateFieldComponent from '../datetime-field/date-field-component';
import DateTimeFieldComponent from '../datetime-field/datetime-field-component';
import TimeFieldComponent from '../datetime-field/time-field-component';
import IconComponent from '../icon/icon-component';

export default function ZTableFilterFieldComponent({
  label,
  filterType,
  value,
  onChange,
  onClear,
}: FilterFieldComponentPropsType) {
  const { t } = useTranslation('common');

  const { pickerValue, handleTextChange, handlePickerChange } = useZTableFilterFieldComponentHook(
    filterType,
    value,
    onChange,
  );

  const pickerSlotProps = {
    textField: { size: 'small', fullWidth: true },
    field: { clearable: true },
  } as const;

  if (filterType === 'date') {
    return (
      <DateFieldComponent
        label={label}
        value={pickerValue}
        onChange={handlePickerChange}
        slotProps={pickerSlotProps}
      />
    );
  }

  if (filterType === 'time') {
    return (
      <TimeFieldComponent
        label={label}
        value={pickerValue}
        onChange={handlePickerChange}
        slotProps={pickerSlotProps}
      />
    );
  }

  if (filterType === 'datetime') {
    return (
      <DateTimeFieldComponent
        label={label}
        value={pickerValue}
        onChange={handlePickerChange}
        slotProps={pickerSlotProps}
      />
    );
  }

  return (
    <TextField
      size="small"
      fullWidth
      label={label}
      value={value}
      onChange={(e) => handleTextChange(e.target.value)}
      slotProps={{
        htmlInput: filterType === 'number' ? { inputMode: 'decimal' } : undefined,
        input: {
          endAdornment: value.trim() !== '' && (
            <InputAdornment position="end">
              <IconButton size="small" edge="end" aria-label={t('clearFilters')} onClick={onClear}>
                <IconComponent icon="ic:baseline-close" fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
