import Box from '@mui/material/Box';

import useZTableComponentHook from '@hooks/ztable/use-ztable-component-hook';
import { DataGrid, type GridValidRowModel } from '@mui/x-data-grid';
import { ztableComponentStyle } from '@styles/ztable/ztable-component-style';
import type { ZTableComponentPropsType } from '@type-defs/ztable/ztable-component-type';

import ZTableToolbarComponent from './ztable-toolbar-component';

export default function ZTableComponent<R extends GridValidRowModel>(
  props: ZTableComponentPropsType<R>,
) {
  const {
    title,
    rows,
    columns,
    loading = false,
    enableColumnVisibility = true,
    enableRowSelection = true,
    enableStriped = true,
  } = props;

  const enableFilter = props.enableFilter !== false;
  const enableSearch = props.enableSearch !== false;
  const enableDownload = props.enableDownload !== false;

  const { filter, handleFilterChange } = useZTableComponentHook({
    onFilterChange: props.onFilterChange,
  });

  const showToolbar =
    Boolean(title) || enableSearch || enableFilter || enableDownload || enableColumnVisibility;

  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        // Read from `props` so the discriminated unions narrow the related props.
        {...(props.enablePagination !== false
          ? {
              paginationMode: 'server' as const,
              rowCount: props.rowCount,
              paginationModel: props.paginationModel,
              onPaginationModelChange: props.onPaginationChange,
              pageSizeOptions: props.pageSizeOptions ?? [props.paginationModel.pageSize],
            }
          : { hideFooterPagination: true })}
        {...(props.enableSorting !== false
          ? {
              sortingMode: props.onSortChange ? ('server' as const) : ('client' as const),
              ...(props.sortModel && { sortModel: props.sortModel }),
              onSortModelChange: props.onSortChange,
            }
          : { disableColumnSorting: true })}
        showToolbar={showToolbar}
        slots={{
          toolbar: ZTableToolbarComponent,
        }}
        slotProps={{
          toolbar: {
            title,
            filter,
            enableSearch,
            enableFilter,
            enableDownload,
            enableColumnVisibility,
            enableRowSelection,
            onFilterChange: handleFilterChange,
            onSearch: props.onSearch,
            onDownload: props.onDownload,
          },
          ...(!enableColumnVisibility && {
            columnMenu: { slots: { columnMenuColumnsItem: null } },
          }),
        }}
        checkboxSelection={enableRowSelection}
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector={!enableColumnVisibility}
        {...(enableStriped && {
          getRowClassName: (params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd',
          sx: ztableComponentStyle.dataGridStripedStyle,
        })}
      />
    </Box>
  );
}
