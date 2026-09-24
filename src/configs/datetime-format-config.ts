/**
 * dayjs formats used by DateFieldComponent, TimeFieldComponent and DateTimeFieldComponent.
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
 * Other examples:
 * - date: 'YYYY-MM-DD', 'DD MMM YYYY', 'dddd, D MMMM YYYY'
 * - time: 'HH:mm:ss', 'hh:mm A'
 * - datetime: 'YYYY-MM-DD HH:mm:ss', 'DD MMM YYYY hh:mm A'
 */
export const dateTimeFormatConfig = {
  date: 'DD/MM/YYYY',
  time: 'HH:mm',
  datetime: 'DD/MM/YYYY HH:mm',
};
