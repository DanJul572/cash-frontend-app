import { useCallback, useMemo, useState } from 'react';

import { useAuthenticatedConfig } from '@contexts';
import type {
  ZTableDownloadValueType,
  ZTableFilterValueType,
  ZTablePaginationValueType,
} from '@type-defs/ztable-component-type';

import { DASHBOARD_TABLE_COLUMNS_CONSTANT, DASHBOARD_TABLE_ROWS_CONSTANT } from '../constants';
import type { DashboardRowType } from '../types';

const matchesFilter = (row: DashboardRowType, filter: ZTableFilterValueType) =>
  Object.entries(filter).every(([field, value]) => {
    const cell =
      field === 'fullName'
        ? `${row.firstName || ''} ${row.lastName || ''}`
        : row[field as keyof DashboardRowType];
    return String(cell ?? '')
      .toLowerCase()
      .includes(value.toLowerCase());
  });

export default function useDashboardPageHook() {
  const { dataPerPage } = useAuthenticatedConfig();

  const [paginationModel, setPaginationModel] = useState<ZTablePaginationValueType>({
    page: 0,
    pageSize: dataPerPage,
  });
  const [filter, setFilter] = useState<ZTableFilterValueType>({});

  // Simulates a server response; replace with a query using `paginationModel` and `filter`.
  const filteredRows = useMemo(
    () => DASHBOARD_TABLE_ROWS_CONSTANT.filter((row) => matchesFilter(row, filter)),
    [filter],
  );

  const rows = useMemo(() => {
    const start = paginationModel.page * paginationModel.pageSize;
    return filteredRows.slice(start, start + paginationModel.pageSize);
  }, [filteredRows, paginationModel]);

  const handlePaginationChange = useCallback((value: ZTablePaginationValueType) => {
    setPaginationModel(value);
  }, []);

  const handleFilterChange = useCallback((value: ZTableFilterValueType) => {
    setFilter(value);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);

  const handleDownload = useCallback((value: ZTableDownloadValueType) => {
    console.log('Download:', value);
  }, []);

  return {
    rows,
    columns: DASHBOARD_TABLE_COLUMNS_CONSTANT,
    rowCount: filteredRows.length,
    paginationModel,
    handlePaginationChange,
    handleFilterChange,
    handleDownload,
  };
}
