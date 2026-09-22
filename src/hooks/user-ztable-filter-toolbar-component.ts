import { useCallback, useState } from 'react';

import type { FilterValues } from '@/types/ztable-filter-toolbar-component-type';
import {
  GridLogicOperator,
  useGridApiContext,
  useGridSelector,
  gridFilterModelSelector,
  gridVisibleColumnDefinitionsSelector,
} from '@mui/x-data-grid';

export default function useZTableFilterToolbarComponent() {
  const apiRef = useGridApiContext();
  const allColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const columns = allColumns.filter((col) => col.field !== '__check__');
  const currentFilterModel = useGridSelector(apiRef, gridFilterModelSelector);

  const [open, setOpen] = useState(false);
  const [filterValues, setFilterValues] = useState<FilterValues>({});

  const handleOpen = useCallback(() => {
    const values: FilterValues = {};
    currentFilterModel.items.forEach((item) => {
      values[item.field] = item.value == null ? '' : String(item.value);
    });
    setFilterValues(values);
    setOpen(true);
  }, [currentFilterModel]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const updateFilter = useCallback((field: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const applyFilters = useCallback(() => {
    const items = columns
      .filter((col) => (filterValues[col.field] ?? '') !== '')
      .map((col) => ({
        id: col.field,
        field: col.field,
        operator: 'equals',
        value: filterValues[col.field],
      }));

    apiRef.current.setFilterModel({
      items,
      logicOperator: GridLogicOperator.And,
    });
    setOpen(false);
  }, [columns, filterValues, apiRef]);

  const clearFilters = useCallback(() => {
    apiRef.current.setFilterModel({
      items: [],
      logicOperator: GridLogicOperator.And,
    });
    setFilterValues({});
  }, [apiRef]);

  return {
    open,
    columns,
    filterValues,
    handleOpen,
    handleClose,
    updateFilter,
    applyFilters,
    clearFilters,
  };
}
