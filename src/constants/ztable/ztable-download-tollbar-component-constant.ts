import type {
  DataTypeOption,
  FileTypeOption,
} from '@type-defs/ztable/ztable-download-tollbar-component-type';

export const FILE_TYPE_OPTION_CONSTANT: FileTypeOption[] = [
  { value: 'xlsx', label: 'XLSX', icon: 'ic:baseline-table-chart', color: 'success.main' },
  { value: 'csv', label: 'CSV', icon: 'ic:baseline-article', color: 'info.main' },
  { value: 'pdf', label: 'PDF', icon: 'ic:baseline-picture-as-pdf', color: 'error.main' },
  { value: 'txt', label: 'TXT', icon: 'ic:baseline-description', color: 'text.secondary' },
];

export const DATA_TYPE_OPTION_CONSTANT: DataTypeOption[] = [
  {
    value: 'all',
    labelKey: 'allData',
    descriptionKey: 'allDataDescription',
    icon: 'ic:baseline-storage',
  },
  {
    value: 'current',
    labelKey: 'currentData',
    descriptionKey: 'currentDataDescription',
    icon: 'ic:baseline-visibility',
  },
  {
    value: 'selected',
    labelKey: 'selectedData',
    descriptionKey: 'selectedDataDescription',
    icon: 'ic:baseline-checklist',
  },
];
