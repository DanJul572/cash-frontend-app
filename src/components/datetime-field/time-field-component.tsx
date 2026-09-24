import useDateTimeFieldComponentHook from '@hooks/datetime-field/use-datetime-field-component-hook';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import type { TimeFieldComponentPropsType } from '@type-defs/datetime-field/datetime-field-component-type';

import DateTimeFormatErrorComponent from './datetime-format-error-component';

export default function TimeFieldComponent(props: TimeFieldComponentPropsType) {
  const { format, errorMessage, ampm } = useDateTimeFieldComponentHook('time');

  if (errorMessage) {
    return <DateTimeFormatErrorComponent fieldType="time" format={format} message={errorMessage} />;
  }

  return <TimePicker {...props} format={format} ampm={ampm} />;
}
