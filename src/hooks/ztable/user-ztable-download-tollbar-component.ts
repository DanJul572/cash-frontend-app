import { useState } from 'react';

import { DATA_TYPE_OPTION_CONSTANT } from '@constants/ztable/ztable-download-tollbar-component-constant';
import {
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridRowSelectionIdsSelector,
  gridVisibleColumnDefinitionsSelector,
  GRID_CHECKBOX_SELECTION_COL_DEF,
  useGridApiContext,
  type GridRowId,
} from '@mui/x-data-grid';
import type {
  ZTableDownloadColumnType,
  ZTableDownloadToolbarComponentPropsType,
} from '@type-defs/ztable/ztable-component-type';
import type { DataType, FileType } from '@type-defs/ztable/ztable-download-tollbar-component-type';

export default function useZTableDownloadButtonComponent({
  filter = {},
  enableRowSelection = true,
  onDownload,
}: ZTableDownloadToolbarComponentPropsType) {
  const apiRef = useGridApiContext();

  const dataTypeOptions = enableRowSelection
    ? DATA_TYPE_OPTION_CONSTANT
    : DATA_TYPE_OPTION_CONSTANT.filter((option) => option.value !== 'selected');

  const [open, setOpen] = useState(false);
  const [fileType, setFileType] = useState<FileType>('xlsx');
  const [dataType, setDataType] = useState<DataType>('all');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getRowIds = (): GridRowId[] => {
    if (dataType === 'current') return gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);
    if (dataType === 'selected') return Array.from(gridRowSelectionIdsSelector(apiRef).keys());
    return [];
  };

  const getColumns = (): ZTableDownloadColumnType[] =>
    gridVisibleColumnDefinitionsSelector(apiRef)
      .filter((col) => col.field !== GRID_CHECKBOX_SELECTION_COL_DEF.field)
      .map((col) => ({ field: col.field, headerName: col.headerName ?? col.field }));

  const handleDownload = () => {
    onDownload?.({ fileType, dataType, columns: getColumns(), filter, rowIds: getRowIds() });
    setOpen(false);
  };

  return {
    open,
    fileType,
    setFileType,
    dataType,
    setDataType,
    dataTypeOptions,
    handleOpen,
    handleClose,
    handleDownload,
  };
}
