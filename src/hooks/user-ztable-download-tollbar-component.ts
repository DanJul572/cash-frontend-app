import { useState } from 'react';

import {
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridRowSelectionIdsSelector,
  useGridApiContext,
  type GridRowId,
} from '@mui/x-data-grid';
import type { ZTableDownloadToolbarComponentPropsType } from '@type-defs/ztable-component-type';
import type { DataType, FileType } from '@type-defs/ztable-download-tollbar-component-type';

export default function useZTableDownloadButtonComponent({
  onDownload,
}: ZTableDownloadToolbarComponentPropsType) {
  const apiRef = useGridApiContext();

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

  const handleDownload = () => {
    onDownload?.({ fileType, dataType, rowIds: getRowIds() });
    setOpen(false);
  };

  return {
    open,
    fileType,
    setFileType,
    dataType,
    setDataType,
    handleOpen,
    handleClose,
    handleDownload,
  };
}
