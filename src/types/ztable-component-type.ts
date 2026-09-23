import type {
  GridColDef,
  GridPaginationModel,
  GridRowId,
  GridValidRowModel,
} from '@mui/x-data-grid';

import type { DataType, FileType } from './ztable-download-tollbar-component-type';
import type { FilterValues } from './ztable-filter-toolbar-component-type';

export type ZTablePaginationValueType = GridPaginationModel;

export type ZTableFilterValueType = FilterValues;

export type ZTableDownloadValueType = {
  fileType: FileType;
  dataType: DataType;
  /** Row ids on the current page (`current`) or checked rows (`selected`); empty for `all`. */
  rowIds: GridRowId[];
};

export type ZTableFilterToolbarComponentPropsType = {
  onFilterChange?: (value: ZTableFilterValueType) => void;
};

export type ZTableDownloadToolbarComponentPropsType = {
  onDownload?: (value: ZTableDownloadValueType) => void;
};

export type ZTableToolbarComponentPropsType = ZTableFilterToolbarComponentPropsType &
  ZTableDownloadToolbarComponentPropsType;

export type ZTableComponentPropsType<R extends GridValidRowModel> = {
  rows: R[];
  columns: GridColDef<R>[];
  rowCount: number;
  paginationModel: ZTablePaginationValueType;
  pageSizeOptions?: number[];
  loading?: boolean;
  onPaginationChange: (value: ZTablePaginationValueType) => void;
  onFilterChange: (value: ZTableFilterValueType) => void;
  onDownload?: (value: ZTableDownloadValueType) => void;
};

declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides {
    onFilterChange?: (value: ZTableFilterValueType) => void;
    onDownload?: (value: ZTableDownloadValueType) => void;
  }
}
