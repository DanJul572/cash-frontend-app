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

export type ZTableDownloadColumnType = {
  field: string;
  headerName: string;
};

export type ZTableDownloadValueType = {
  fileType: FileType;
  dataType: DataType;
  /** Visible columns in the same order as the table view. */
  columns: ZTableDownloadColumnType[];
  /** Filter currently applied to the table. */
  filter: ZTableFilterValueType;
  /** Row ids on the current page (`current`) or checked rows (`selected`); empty for `all`. */
  rowIds: GridRowId[];
};

export type ZTableFilterToolbarComponentPropsType = {
  filter?: ZTableFilterValueType;
  onFilterChange?: (value: ZTableFilterValueType) => void;
};

export type ZTableDownloadToolbarComponentPropsType = {
  filter?: ZTableFilterValueType;
  onDownload?: (value: ZTableDownloadValueType) => void;
};

export type ZTableTitleToolbarComponentPropsType = {
  title?: string;
};

export type ZTableToolbarComponentPropsType = ZTableTitleToolbarComponentPropsType &
  ZTableFilterToolbarComponentPropsType &
  ZTableDownloadToolbarComponentPropsType;

export type ZTableComponentPropsType<R extends GridValidRowModel> = {
  title?: string;
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
    title?: string;
    filter?: ZTableFilterValueType;
    onFilterChange?: (value: ZTableFilterValueType) => void;
    onDownload?: (value: ZTableDownloadValueType) => void;
  }
}
