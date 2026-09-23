import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NumbersIcon from '@mui/icons-material/Numbers';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

import type { FilterColumnIconMap } from '@type-defs/ztable-filter-toolbar-component-type';

export const FILTER_COLUMN_ICON_CONSTANT: FilterColumnIconMap = {
  string: TextFieldsIcon,
  number: NumbersIcon,
  date: CalendarMonthIcon,
  dateTime: CalendarMonthIcon,
  boolean: ToggleOnIcon,
};

export const FILTER_COLUMN_DEFAULT_ICON_CONSTANT = TextFieldsIcon;
