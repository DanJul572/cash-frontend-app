import { useTranslation } from 'react-i18next';

import { UI_TRANSLATION_NAMESPACE_CONSTANT } from '../../constants/translation-constant';
import type { DateTimeFieldType } from '../../types/datetime-field/datetime-field-component-type';
import { validateDateTimeFormat } from '../../utils/datetime-field/validate-datetime-format-util';
import useDateTimeFormatConfigHook from './use-datetime-format-config-hook';

export default function useDateTimeFieldComponentHook(fieldType: DateTimeFieldType) {
  const { t } = useTranslation(UI_TRANSLATION_NAMESPACE_CONSTANT);
  const dateTimeFormat = useDateTimeFormatConfigHook();

  const format = dateTimeFormat[fieldType];
  const validation = validateDateTimeFormat(fieldType, format);

  const errorMessage = validation.isValid ? null : t(validation.errorKey, validation.errorParams);
  const ampm = validation.isValid && validation.is12Hour;

  return { format, errorMessage, ampm };
}
