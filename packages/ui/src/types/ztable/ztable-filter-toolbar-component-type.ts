export type FilterValues = Record<string, string>;

/**
 * Input type of a column filter field.
 * - `text`: free text
 * - `number`: digits only (optional leading `-` and one decimal `.`)
 * - `date`: date picker, value formatted as `YYYY-MM-DD`
 * - `time`: time picker, value formatted as `HH:mm`
 * - `datetime`: date-time picker, value formatted as `YYYY-MM-DDTHH:mm`
 *
 * Picker display format follows the config's `dateTimeFormat`; the filter value format above is fixed.
 */
export type FilterFieldType = 'text' | 'number' | 'date' | 'time' | 'datetime';

export type FilterFieldComponentPropsType = {
  label: string;
  filterType: FilterFieldType;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};
