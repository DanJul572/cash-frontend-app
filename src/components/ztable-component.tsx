import Box from '@mui/material/Box';

import { DataGrid, type GridValidRowModel } from '@mui/x-data-grid';
import type { ZTableComponentPropsType } from '@type-defs/ztable-component-type';

import ZTableToolbarComponent from './ztable-toolbar-component';

export default function ZTableComponent<R extends GridValidRowModel>({
  rows,
  columns,
  rowCount,
  paginationModel,
  pageSizeOptions,
  loading = false,
  onPaginationChange,
  onFilterChange,
  onDownload,
}: ZTableComponentPropsType<R>) {
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
        showToolbar
        slots={{
          toolbar: ZTableToolbarComponent,
        }}
        slotProps={{
          toolbar: { onFilterChange, onDownload },
        }}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
      />
    </Box>
  );
}
