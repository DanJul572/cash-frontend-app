import type { ElementType } from 'react';

export type FileType = 'xlsx' | 'csv' | 'pdf' | 'txt';
export type DataType = 'all' | 'current' | 'selected';

export interface FileTypeOption {
  value: FileType;
  label: string;
  icon: ElementType;
  color: string;
}

export interface DataTypeOption {
  value: DataType;
  labelKey: string;
  descriptionKey: string;
  icon: ElementType;
}
