import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import type { TimePickerProps } from '@mui/x-date-pickers/TimePicker';

/** Key of `dateTimeFormat` (guest / authenticated config) a field reads its format from. */
export type DateTimeFieldType = 'date' | 'time' | 'datetime';

/**
 * dayjs formats used by DateFieldComponent, TimeFieldComponent and DateTimeFieldComponent,
 * provided by the backend through the guest and authenticated config.
 *
 * Supported tokens:
 * - Year: YY, YYYY
 * - Month: M, MM, MMM (Jan), MMMM (January)
 * - Day: D, DD, Do (1st)
 * - Weekday: d, dd, ddd, dddd
 * - Hour: H, HH (24-hour) / h, hh (12-hour, requires A or a)
 * - Minute: m, mm
 * - Second: s, ss
 * - Meridiem: A (AM/PM), a (am/pm)
 * - Wrap literal text in brackets, e.g. 'YYYY-MM-DD[T]HH:mm'
 *
 * Examples:
 * - date: 'DD/MM/YYYY', 'YYYY-MM-DD', 'DD MMM YYYY', 'dddd, D MMMM YYYY'
 * - time: 'HH:mm', 'HH:mm:ss', 'hh:mm A'
 * - datetime: 'DD/MM/YYYY HH:mm', 'YYYY-MM-DD HH:mm:ss', 'DD MMM YYYY hh:mm A'
 */
export type DateTimeFormatConfigType = Record<DateTimeFieldType, string>;

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
