import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import type { TimePickerProps } from '@mui/x-date-pickers/TimePicker';

/** Key of `dateTimeFormatConfig` a field reads its format from. */
export type DateTimeFieldType = 'date' | 'time' | 'datetime';

export type DateTimeFormatTokenCategoryType = 'date' | 'time';

export type DateTimeFormatSectionType =
  'year' | 'month' | 'day' | 'weekDay' | 'hours12' | 'hours24' | 'minutes' | 'seconds' | 'meridiem';

export type DateTimeFormatTokenType = {
  category: DateTimeFormatTokenCategoryType;
  section: DateTimeFormatSectionType;
};

/** At least one of `sections` must be present in the format; `hint` is shown in the error. */
export type DateTimeFormatRequiredSectionType = {
  sections: DateTimeFormatSectionType[];
  hint: string;
};

export type DateTimeFormatValidationResultType =
  | { isValid: true; is12Hour: boolean }
  | { isValid: false; errorKey: string; errorParams?: Record<string, string> };

export type DateFieldComponentPropsType = Omit<DatePickerProps, 'format'>;

export type TimeFieldComponentPropsType = Omit<TimePickerProps, 'format' | 'ampm'>;

export type DateTimeFieldComponentPropsType = Omit<DateTimePickerProps, 'format' | 'ampm'>;

export type DateTimeFormatErrorComponentPropsType = {
  fieldType: DateTimeFieldType;
  format: string;
  message: string;
};
