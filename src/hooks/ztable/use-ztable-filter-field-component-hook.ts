import { useState } from 'react';

import dayjs, { type Dayjs } from 'dayjs';

import type { ZTableFilterFieldType } from '@type-defs/ztable/ztable-component-type';

const NUMBER_PATTERN = /^-?\d*\.?\d*$/;

const PICKER_FORMAT: Partial<Record<ZTableFilterFieldType, string>> = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
  datetime: 'YYYY-MM-DD[T]HH:mm',
};

const toDayjs = (filterType: ZTableFilterFieldType, value: string): Dayjs | null => {
  if (value === '') return null;
  const parsed = dayjs(filterType === 'time' ? `1970-01-01T${value}` : value);
  return parsed.isValid() ? parsed : null;
};

const toFilterValue = (filterType: ZTableFilterFieldType, value: Dayjs | null) =>
  value?.isValid() ? value.format(PICKER_FORMAT[filterType]) : '';

export default function useZTableFilterFieldComponentHook(
  filterType: ZTableFilterFieldType,
  value: string,
  onChange: (value: string) => void,
) {
  // Picker keeps its own Dayjs value so a partially typed (invalid) date isn't wiped
  // when the published filter string falls back to ''.
  const [pickerValue, setPickerValue] = useState<Dayjs | null>(() => toDayjs(filterType, value));
  const [prevValue, setPrevValue] = useState(value);

  if (value !== prevValue) {
    setPrevValue(value);
    if (value !== toFilterValue(filterType, pickerValue)) {
      setPickerValue(toDayjs(filterType, value));
    }
  }

  const handleTextChange = (next: string) => {
    if (filterType === 'number' && !NUMBER_PATTERN.test(next)) return;
    onChange(next);
  };

  const handlePickerChange = (next: Dayjs | null) => {
    setPickerValue(next);
    onChange(toFilterValue(filterType, next));
  };

  return { pickerValue, handleTextChange, handlePickerChange };
}
