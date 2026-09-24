import { useTranslation } from 'react-i18next';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import CloseIcon from '@mui/icons-material/Close';

import useZTableFilterFieldComponentHook from '@hooks/use-ztable-filter-field-component-hook';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import type { FilterFieldComponentPropsType } from '@type-defs/ztable-filter-toolbar-component-type';

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
      <DatePicker
        label={label}
        value={pickerValue}
        onChange={handlePickerChange}
        slotProps={pickerSlotProps}
      />
    );
  }

  if (filterType === 'time') {
    return (
      <TimePicker
        label={label}
        value={pickerValue}
        onChange={handlePickerChange}
        ampm={false}
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
                <CloseIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
