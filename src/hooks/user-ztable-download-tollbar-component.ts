import { useState } from 'react';

import type { DataType, FileType } from '@type-defs/ztable-download-tollbar-component-type';

export default function useZTableDownloadButtonComponent() {
  const [open, setOpen] = useState(false);
  const [fileType, setFileType] = useState<FileType>('xlsx');
  const [dataType, setDataType] = useState<DataType>('all');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDownload = () => {
    console.log('Download:', { fileType, dataType });
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
