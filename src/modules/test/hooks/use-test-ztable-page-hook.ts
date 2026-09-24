import { useCallback, useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useAuthenticatedConfig } from '@contexts';
import type {
  ZTableDownloadValueType,
  ZTableFilterValueType,
  ZTablePaginationValueType,
  ZTableSortValueType,
} from '@type-defs/ztable/ztable-component-type';

import { TEST_ZTABLE_COLUMNS_CONSTANT, TEST_ZTABLE_ROWS_CONSTANT } from '../constants';
import type { TestZTableRowType } from '../types';

const getCellValue = (row: TestZTableRowType, field: string) =>
  field === 'fullName'
    ? `${row.firstName || ''} ${row.lastName || ''}`
    : row[field as keyof TestZTableRowType];

const matchesFilter = (row: TestZTableRowType, filter: ZTableFilterValueType) =>
  Object.entries(filter).every(([field, value]) => {
    const cell = getCellValue(row, field);
    return String(cell ?? '')
      .toLowerCase()
      .includes(value.toLowerCase());
  });

const matchesSearch = (row: TestZTableRowType, search: string) =>
  search === '' ||
  Object.values(row).some((cell) =>
    String(cell ?? '')
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

// Empty values always go last, regardless of direction.
const compareRows = (
  a: TestZTableRowType,
  b: TestZTableRowType,
  sortModel: ZTableSortValueType,
) => {
  for (const { field, sort } of sortModel) {
    const left = getCellValue(a, field);
    const right = getCellValue(b, field);
    if (left === right) continue;
    if (left === null) return 1;
    if (right === null) return -1;

    const result =
      typeof left === 'number' && typeof right === 'number'
        ? left - right
        : String(left).localeCompare(String(right));
    if (result !== 0) return sort === 'desc' ? -result : result;
  }
  return 0;
};

export default function useTestZTablePageHook() {
  const { t } = useTranslation('test');
  const { dataPerPage } = useAuthenticatedConfig();

  const [paginationModel, setPaginationModel] = useState<ZTablePaginationValueType>({
    page: 0,
    pageSize: dataPerPage,
  });
  const [filter, setFilter] = useState<ZTableFilterValueType>({});
  const [search, setSearch] = useState('');
  const [sortModel, setSortModel] = useState<ZTableSortValueType>([]);

  // Simulates a server response; replace with a query using `paginationModel`, `sortModel`, `filter` and `search`.
  const filteredRows = useMemo(
    () =>
      TEST_ZTABLE_ROWS_CONSTANT.filter(
        (row) => matchesFilter(row, filter) && matchesSearch(row, search),
      ).sort((a, b) => compareRows(a, b, sortModel)),
    [filter, search, sortModel],
  );

  const rows = useMemo(() => {
    const start = paginationModel.page * paginationModel.pageSize;
    return filteredRows.slice(start, start + paginationModel.pageSize);
  }, [filteredRows, paginationModel]);

  const handlePaginationChange = useCallback((value: ZTablePaginationValueType) => {
    setPaginationModel(value);
  }, []);

  const handleSortChange = useCallback((value: ZTableSortValueType) => {
    setSortModel(value);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);

  const handleFilterChange = useCallback((value: ZTableFilterValueType) => {
    setFilter(value);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, []);

  const handleDownload = useCallback((value: ZTableDownloadValueType) => {
    console.log('Download:', value);
  }, []);

  return {
    t,
    rows,
    columns: TEST_ZTABLE_COLUMNS_CONSTANT,
    rowCount: filteredRows.length,
    paginationModel,
    sortModel,
    handlePaginationChange,
    handleSortChange,
    handleFilterChange,
    handleSearch,
    handleDownload,
  };
}
