import type {
  GridColDef,
  GridPaginationModel,
  GridRowId,
  GridSortModel,
  GridValidRowModel,
} from '@mui/x-data-grid';

import type { DataType, FileType } from './ztable-download-tollbar-component-type';
import type { FilterFieldType, FilterValues } from './ztable-filter-toolbar-component-type';

export type ZTablePaginationValueType = GridPaginationModel;

export type ZTableFilterValueType = FilterValues;

/** Sorted columns in priority order, e.g. `[{ field: 'age', sort: 'desc' }]`; empty when unsorted. */
export type ZTableSortValueType = GridSortModel;

export type ZTableFilterFieldType = FilterFieldType;

export type ZTableColumnType<R extends GridValidRowModel = GridValidRowModel> = GridColDef<R> & {
  /** Filter input type. Defaults to `number` for `type: 'number'` columns, otherwise `text`. */
  filterType?: ZTableFilterFieldType;
};

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

export type ZTableSearchToolbarComponentPropsType = {
  /** Called with the trimmed keyword after the user stops typing (debounced). */
  onSearch?: (value: string) => void;
};

export type ZTableSearchButtonToolbarComponentPropsType = {
  /** Shows an indicator while a keyword is entered. */
  active: boolean;
  onClick: () => void;
};

export type ZTableSearchFieldToolbarComponentPropsType = {
  open: boolean;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onClose: () => void;
};

export type ZTableTitleToolbarComponentPropsType = {
  title?: string;
};

export type ZTableToolbarComponentPropsType = ZTableTitleToolbarComponentPropsType &
  ZTableSearchToolbarComponentPropsType &
  ZTableFilterToolbarComponentPropsType &
  ZTableDownloadToolbarComponentPropsType;

export type ZTableComponentPropsType<R extends GridValidRowModel> = {
  title?: string;
  rows: R[];
  columns: ZTableColumnType<R>[];
  rowCount: number;
  paginationModel: ZTablePaginationValueType;
  /** Controlled sort state; leave empty to let the grid keep it internally. */
  sortModel?: ZTableSortValueType;
  pageSizeOptions?: number[];
  loading?: boolean;
  onPaginationChange: (value: ZTablePaginationValueType) => void;
  /** When provided, sorting is delegated to the caller (server-side) instead of the grid. */
  onSortChange?: (value: ZTableSortValueType) => void;
  onFilterChange: (value: ZTableFilterValueType) => void;
  onSearch?: (value: string) => void;
  onDownload?: (value: ZTableDownloadValueType) => void;
};

declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides {
    title?: string;
    filter?: ZTableFilterValueType;
    onFilterChange?: (value: ZTableFilterValueType) => void;
    onSearch?: (value: string) => void;
    onDownload?: (value: ZTableDownloadValueType) => void;
  }
}
