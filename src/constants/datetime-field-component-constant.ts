import type {
  DateTimeFieldType,
  DateTimeFormatRequiredSectionType,
  DateTimeFormatTokenCategoryType,
  DateTimeFormatTokenType,
} from '@type-defs/datetime-field-component-type';

/** dayjs tokens supported by `AdapterDayjs` of @mui/x-date-pickers. */
export const DATETIME_FORMAT_TOKEN_CONSTANT: Record<string, DateTimeFormatTokenType> = {
  YY: { category: 'date', section: 'year' },
  YYYY: { category: 'date', section: 'year' },
  M: { category: 'date', section: 'month' },
  MM: { category: 'date', section: 'month' },
  MMM: { category: 'date', section: 'month' },
  MMMM: { category: 'date', section: 'month' },
  D: { category: 'date', section: 'day' },
  DD: { category: 'date', section: 'day' },
  Do: { category: 'date', section: 'day' },
  d: { category: 'date', section: 'weekDay' },
  dd: { category: 'date', section: 'weekDay' },
  ddd: { category: 'date', section: 'weekDay' },
  dddd: { category: 'date', section: 'weekDay' },
  H: { category: 'time', section: 'hours24' },
  HH: { category: 'time', section: 'hours24' },
  h: { category: 'time', section: 'hours12' },
  hh: { category: 'time', section: 'hours12' },
  m: { category: 'time', section: 'minutes' },
  mm: { category: 'time', section: 'minutes' },
  s: { category: 'time', section: 'seconds' },
  ss: { category: 'time', section: 'seconds' },
  A: { category: 'time', section: 'meridiem' },
  a: { category: 'time', section: 'meridiem' },
};

const DATE_REQUIRED_SECTIONS: DateTimeFormatRequiredSectionType[] = [
  { sections: ['year'], hint: 'YYYY' },
  { sections: ['month'], hint: 'MM' },
  { sections: ['day'], hint: 'DD' },
];

const TIME_REQUIRED_SECTIONS: DateTimeFormatRequiredSectionType[] = [
  { sections: ['hours24', 'hours12'], hint: 'HH / hh' },
  { sections: ['minutes'], hint: 'mm' },
];

export const DATETIME_FORMAT_REQUIRED_SECTION_CONSTANT: Record<
  DateTimeFieldType,
  DateTimeFormatRequiredSectionType[]
> = {
  date: DATE_REQUIRED_SECTIONS,
  time: TIME_REQUIRED_SECTIONS,
  datetime: [...DATE_REQUIRED_SECTIONS, ...TIME_REQUIRED_SECTIONS],
};

export const DATETIME_FORMAT_ALLOWED_CATEGORY_CONSTANT: Record<
  DateTimeFieldType,
  DateTimeFormatTokenCategoryType[]
> = {
  date: ['date'],
  time: ['time'],
  datetime: ['date', 'time'],
};
