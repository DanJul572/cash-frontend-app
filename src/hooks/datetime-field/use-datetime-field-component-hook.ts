import { useTranslation } from 'react-i18next';

import { dateTimeFormatConfig } from '@/configs/datetime-format-config';
import type { DateTimeFieldType } from '@type-defs/datetime-field/datetime-field-component-type';
import { validateDateTimeFormat } from '@utils/datetime-field/validate-datetime-format-util';

export default function useDateTimeFieldComponentHook(fieldType: DateTimeFieldType) {
  const { t } = useTranslation('common');

  const format = dateTimeFormatConfig[fieldType];
  const validation = validateDateTimeFormat(fieldType, format);

  const errorMessage = validation.isValid ? null : t(validation.errorKey, validation.errorParams);
  const ampm = validation.isValid && validation.is12Hour;

  return { format, errorMessage, ampm };
}
