import Box from '@mui/material/Box';

import { ZTableComponent } from '@zapplib/ui';

import { usePlaygroundZTablePageHook } from '../hooks';
import { playgroundZTablePageStyle } from '../styles';

export default function PlaygroundZTablePage() {
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
  } = usePlaygroundZTablePageHook();

  return (
    <Box sx={playgroundZTablePageStyle.containerStyle}>
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
