import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import useDateTimeFieldComponentHook from '../../hooks/datetime-field/use-datetime-field-component-hook';
import type { DateTimeFieldComponentPropsType } from '../../types/datetime-field/datetime-field-component-type';
import DateTimeFormatErrorComponent from './datetime-format-error-component';

export default function DateTimeFieldComponent(props: DateTimeFieldComponentPropsType) {
  const { format, errorMessage, ampm } = useDateTimeFieldComponentHook('datetime');

  if (errorMessage) {
    return (
      <DateTimeFormatErrorComponent fieldType="datetime" format={format} message={errorMessage} />
    );
  }

  return <DateTimePicker {...props} format={format} ampm={ampm} />;
}
