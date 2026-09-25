import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import type { Dayjs } from 'dayjs';

import { useDateTimeFormatConfigHook } from '@hooks';

export default function useTestDatetimePageHook() {
  const { t } = useTranslation('test');
  const dateTimeFormatConfig = useDateTimeFormatConfigHook();

  const [dateValue, setDateValue] = useState<Dayjs | null>(null);
  const [timeValue, setTimeValue] = useState<Dayjs | null>(null);
  const [dateTimeValue, setDateTimeValue] = useState<Dayjs | null>(null);

  const fields = [
    {
      key: 'date',
      format: dateTimeFormatConfig.date,
      value: dateValue,
      onChange: setDateValue,
    },
    {
      key: 'time',
      format: dateTimeFormatConfig.time,
      value: timeValue,
      onChange: setTimeValue,
    },
    {
      key: 'datetime',
      format: dateTimeFormatConfig.datetime,
      value: dateTimeValue,
      onChange: setDateTimeValue,
    },
  ] as const;

  const handleReset = () => {
    setDateValue(null);
    setTimeValue(null);
    setDateTimeValue(null);
  };

  return { t, fields, handleReset };
}
