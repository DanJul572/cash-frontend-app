import { useCallback, useState } from 'react';

import type { FilterCondition } from '@/types/ztable-filter-toolbar-component-type';
import {
  GridLogicOperator,
  useGridApiContext,
  useGridSelector,
  gridFilterModelSelector,
  gridVisibleColumnDefinitionsSelector,
} from '@mui/x-data-grid';

let counter = 0;
const generateId = () => `filter-${++counter}-${Date.now()}`;

export default function useZTableFilterToolbarComponent() {
  const apiRef = useGridApiContext();
  const columns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const currentFilterModel = useGridSelector(apiRef, gridFilterModelSelector);

  const [open, setOpen] = useState(false);
  const [logicOperator, setLogicOperator] = useState<'and' | 'or'>('and');
  const [filterConditions, setFilterConditions] = useState<FilterCondition[]>([]);

  const handleOpen = useCallback(() => {
    const existingItems = currentFilterModel.items;
    if (existingItems.length > 0) {
      setFilterConditions(
        existingItems.map((item) => ({
          id: String(item.id ?? generateId()),
          field: item.field,
          operator: item.operator,
          value: item.value ?? null,
        })),
      );
      setLogicOperator(currentFilterModel.logicOperator === 'or' ? 'or' : 'and');
    } else {
      setFilterConditions([
        {
          id: generateId(),
          field: columns[0]?.field ?? '',
          operator: 'contains',
          value: null,
        },
      ]);
      setLogicOperator('and');
    }
    setOpen(true);
  }, [columns, currentFilterModel]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const addFilter = useCallback(() => {
    setFilterConditions((prev) => [
      ...prev,
      {
        id: generateId(),
        field: columns[0]?.field ?? '',
        operator: 'contains',
        value: null,
      },
    ]);
  }, [columns]);

  const removeFilter = useCallback((id: string) => {
    setFilterConditions((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const updateFilter = useCallback((id: string, updates: Partial<Omit<FilterCondition, 'id'>>) => {
    setFilterConditions((prev) => prev.map((c) => (c.id === id ? { ...c, ...updates } : c)));
  }, []);

  const applyFilters = useCallback(() => {
    const validConditions = filterConditions.filter(
      (c) => c.field && c.operator && c.value !== null && c.value !== '',
    );

    apiRef.current.setFilterModel({
      items: validConditions.map((c) => ({
        id: c.id,
        field: c.field,
        operator: c.operator,
        value: c.value,
      })),
      logicOperator: logicOperator === 'or' ? GridLogicOperator.Or : GridLogicOperator.And,
    });
    setOpen(false);
  }, [filterConditions, logicOperator, apiRef]);

  const clearFilters = useCallback(() => {
    apiRef.current.setFilterModel({
      items: [],
      logicOperator: GridLogicOperator.And,
    });
    setFilterConditions([
      {
        id: generateId(),
        field: columns[0]?.field ?? '',
        operator: 'contains',
        value: null,
      },
    ]);
    setLogicOperator('and');
  }, [apiRef, columns]);

  return {
    open,
    columns,
    logicOperator,
    filterConditions,
    setLogicOperator,
    handleOpen,
    handleClose,
    addFilter,
    removeFilter,
    updateFilter,
    applyFilters,
    clearFilters,
  };
}
