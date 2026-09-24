import { useState } from 'react';

import {
  gridVisibleColumnDefinitionsSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import type {
  ZTableColumnType,
  ZTableFilterFieldType,
  ZTableFilterToolbarComponentPropsType,
  ZTableFilterValueType,
} from '@type-defs/ztable/ztable-component-type';

// Custom colDef props (e.g. `filterType`) are kept on the grid's column state.
const resolveFilterType = (col: ZTableColumnType): ZTableFilterFieldType =>
  col.filterType ?? (col.type === 'number' ? 'number' : 'text');

export default function useZTableFilterToolbarComponent({
  filter = {},
  onFilterChange,
}: ZTableFilterToolbarComponentPropsType) {
  const apiRef = useGridApiContext();
  const allColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const columns = allColumns
    .filter((col) => col.field !== '__check__')
    .map((col) => ({ ...col, filterType: resolveFilterType(col as ZTableColumnType) }));

  const [open, setOpen] = useState(false);
  const [filterValues, setFilterValues] = useState<ZTableFilterValueType>({});

  const appliedCount = Object.keys(filter).length;
  const activeCount = columns.filter((col) => (filterValues[col.field] ?? '').trim() !== '').length;

  const handleOpen = () => {
    setFilterValues(filter);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const updateFilter = (field: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [field]: value }));
  };

  const clearFilter = (field: string) => {
    setFilterValues((prev) => ({ ...prev, [field]: '' }));
  };

  const applyFilters = () => {
    const values: ZTableFilterValueType = {};
    columns.forEach((col) => {
      const value = (filterValues[col.field] ?? '').trim();
      if (value !== '') values[col.field] = value;
    });

    onFilterChange?.(values);
    setOpen(false);
  };

  const clearFilters = () => {
    setFilterValues({});
    onFilterChange?.({});
  };

  return {
    open,
    columns,
    filterValues,
    appliedCount,
    activeCount,
    handleOpen,
    handleClose,
    updateFilter,
    clearFilter,
    applyFilters,
    clearFilters,
  };
}
