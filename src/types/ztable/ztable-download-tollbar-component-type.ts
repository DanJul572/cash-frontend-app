export type FileType = 'xlsx' | 'csv' | 'pdf' | 'txt';
export type DataType = 'all' | 'current' | 'selected';

export interface FileTypeOption {
  value: FileType;
  label: string;
  /** Iconify icon name. */
  icon: string;
  color: string;
}

export interface DataTypeOption {
  value: DataType;
  labelKey: string;
  descriptionKey: string;
  /** Iconify icon name. */
  icon: string;
}
