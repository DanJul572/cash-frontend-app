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
