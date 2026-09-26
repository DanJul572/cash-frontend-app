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
  /** Hides the `selected` data type when row checkboxes are off. */
  enableRowSelection?: boolean;
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

export type ZTableToolbarFeatureFlagsType = {
  enableSearch?: boolean;
  enableFilter?: boolean;
  enableDownload?: boolean;
  enableColumnVisibility?: boolean;
};

export type ZTableToolbarComponentPropsType = ZTableTitleToolbarComponentPropsType &
  ZTableSearchToolbarComponentPropsType &
  ZTableFilterToolbarComponentPropsType &
  ZTableDownloadToolbarComponentPropsType &
  ZTableToolbarFeatureFlagsType;

/**
 * Server-side pagination. Set `enablePagination: false` to hide the pager; the caller then
 * passes no pagination props. Note: the MIT DataGrid still renders at most 100 rows.
 */
export type ZTablePaginationPropsType =
  | {
      /** Defaults to `true`. */
      enablePagination?: true;
      rowCount: number;
      paginationModel: ZTablePaginationValueType;
      pageSizeOptions?: number[];
      onPaginationChange: (value: ZTablePaginationValueType) => void;
    }
  | {
      enablePagination: false;
      rowCount?: never;
      paginationModel?: never;
      pageSizeOptions?: never;
      onPaginationChange?: never;
    };

export type ZTableSortingPropsType =
  | {
      /** Defaults to `true`. */
      enableSorting?: true;
      /** Controlled sort state; leave empty to let the grid keep it internally. */
      sortModel?: ZTableSortValueType;
      /** When provided, sorting is delegated to the caller (server-side) instead of the grid. */
      onSortChange?: (value: ZTableSortValueType) => void;
    }
  | {
      enableSorting: false;
      sortModel?: never;
      onSortChange?: never;
    };

export type ZTableFilterPropsType =
  | {
      /** Defaults to `true`. */
      enableFilter?: true;
      onFilterChange: (value: ZTableFilterValueType) => void;
    }
  | {
      enableFilter: false;
      onFilterChange?: never;
    };

export type ZTableSearchPropsType =
  | {
      /** Defaults to `true`. */
      enableSearch?: true;
      onSearch: (value: string) => void;
    }
  | {
      enableSearch: false;
      onSearch?: never;
    };

export type ZTableDownloadPropsType =
  | {
      /** Defaults to `true`. */
      enableDownload?: true;
      onDownload: (value: ZTableDownloadValueType) => void;
    }
  | {
      enableDownload: false;
      onDownload?: never;
    };

export type ZTableComponentPropsType<R extends GridValidRowModel> = {
  title?: string;
  rows: R[];
  columns: ZTableColumnType<R>[];
  loading?: boolean;
  /** Shows the column visibility button and the column menu's hide/manage items. Defaults to `true`. */
  enableColumnVisibility?: boolean;
  /** Shows the row checkbox column. Defaults to `true`. */
  enableRowSelection?: boolean;
  /** Alternates row background per page. Defaults to `true`. */
  enableStriped?: boolean;
} & ZTablePaginationPropsType &
  ZTableSortingPropsType &
  ZTableFilterPropsType &
  ZTableSearchPropsType &
  ZTableDownloadPropsType;

declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides extends ZTableToolbarFeatureFlagsType {
    title?: string;
    enableRowSelection?: boolean;
    filter?: ZTableFilterValueType;
    onFilterChange?: (value: ZTableFilterValueType) => void;
    onSearch?: (value: string) => void;
    onDownload?: (value: ZTableDownloadValueType) => void;
  }
}
