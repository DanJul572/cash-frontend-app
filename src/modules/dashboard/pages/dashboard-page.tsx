import ZTableComponent from '@components/ztable-component';

import { useDashboardPageHook } from '../hooks';

export default function DashboardPage() {
  const {
    rows,
    columns,
    rowCount,
    paginationModel,
    handlePaginationChange,
    handleFilterChange,
    handleDownload,
  } = useDashboardPageHook();

  return (
    <ZTableComponent
      rows={rows}
      columns={columns}
      rowCount={rowCount}
      paginationModel={paginationModel}
      onPaginationChange={handlePaginationChange}
      onFilterChange={handleFilterChange}
      onDownload={handleDownload}
    />
  );
}
