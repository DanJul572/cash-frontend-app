import Box from '@mui/material/Box';

import useZTableComponentHook from '@hooks/ztable/use-ztable-component-hook';
import { DataGrid, type GridValidRowModel } from '@mui/x-data-grid';
import { ztableComponentStyle } from '@styles/ztable/ztable-component-style';
import type { ZTableComponentPropsType } from '@type-defs/ztable/ztable-component-type';

import ZTableToolbarComponent from './ztable-toolbar-component';

export default function ZTableComponent<R extends GridValidRowModel>({
  title,
  rows,
  columns,
  rowCount,
  paginationModel,
  sortModel,
  pageSizeOptions,
  loading = false,
  striped = true,
  onPaginationChange,
  onSortChange,
  onFilterChange,
  onSearch,
  onDownload,
}: ZTableComponentPropsType<R>) {
  const { filter, handleFilterChange } = useZTableComponentHook({ onFilterChange });

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowCount={rowCount}
        loading={loading}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={onPaginationChange}
        pageSizeOptions={pageSizeOptions ?? [paginationModel.pageSize]}
        sortingMode={onSortChange ? 'server' : 'client'}
        {...(sortModel && { sortModel })}
        onSortModelChange={onSortChange}
        showToolbar
        slots={{
          toolbar: ZTableToolbarComponent,
        }}
        slotProps={{
          toolbar: { title, filter, onFilterChange: handleFilterChange, onSearch, onDownload },
        }}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        {...(striped && {
          getRowClassName: (params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd',
          sx: ztableComponentStyle.dataGridStripedStyle,
        })}
      />
    </Box>
  );
}
