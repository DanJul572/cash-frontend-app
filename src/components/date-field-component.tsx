import useDateTimeFieldComponentHook from '@hooks/use-datetime-field-component-hook';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { DateFieldComponentPropsType } from '@type-defs/datetime-field-component-type';

import DateTimeFormatErrorComponent from './datetime-format-error-component';

export default function DateFieldComponent(props: DateFieldComponentPropsType) {
  const { format, errorMessage } = useDateTimeFieldComponentHook('date');

  if (errorMessage) {
    return <DateTimeFormatErrorComponent fieldType="date" format={format} message={errorMessage} />;
  }

  return <DatePicker {...props} format={format} />;
}
