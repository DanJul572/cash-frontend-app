import Box from '@mui/material/Box';

import ZTableComponent from '@components/ztable/ztable-component';

import { useTestZTablePageHook } from '../hooks';
import { testZTablePageStyle } from '../styles';

export default function TestZTablePage() {
  const {
    t,
    rows,
    columns,
    rowCount,
    paginationModel,
    sortModel,
    handlePaginationChange,
    handleSortChange,
    handleFilterChange,
    handleSearch,
    handleDownload,
  } = useTestZTablePageHook();

  return (
    <Box sx={testZTablePageStyle.containerStyle}>
      <ZTableComponent
        title={t('ztableTitle')}
        rows={rows}
        columns={columns}
        rowCount={rowCount}
        paginationModel={paginationModel}
        sortModel={sortModel}
        onPaginationChange={handlePaginationChange}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        onDownload={handleDownload}
      />
    </Box>
  );
}
