import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Tooltip from '@mui/material/Tooltip';

import useZTableDownloadButtonComponent from '@hooks/user-ztable-download-tollbar-component';
import { GridDownloadIcon, ToolbarButton } from '@mui/x-data-grid';
import { ztableDownloadTollbarComponentStyle } from '@styles/ztable-download-tollbar-component-style';
import type { DataType, FileType } from '@type-defs/ztable-download-tollbar-component-type';

export default function ZTableDownloadButtonComponent() {
  const { t } = useTranslation('common');

  const {
    open,
    fileType,
    setFileType,
    dataType,
    setDataType,
    handleOpen,
    handleClose,
    handleDownload,
  } = useZTableDownloadButtonComponent();

  return (
    <Box>
      <Tooltip title={t('download')}>
        <ToolbarButton onClick={handleOpen}>
          <GridDownloadIcon />
        </ToolbarButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>{t('downloadData')}</DialogTitle>
        <DialogContent>
          <Box sx={ztableDownloadTollbarComponentStyle.modalRootStyle}>
            <FormControl>
              <FormLabel>{t('fileData')}</FormLabel>
              <RadioGroup
                row
                value={fileType}
                onChange={(e) => setFileType(e.target.value as FileType)}
              >
                <FormControlLabel value="xlsx" control={<Radio size="small" />} label="XLSX" />
                <FormControlLabel value="csv" control={<Radio size="small" />} label="CSV" />
                <FormControlLabel value="pdf" control={<Radio size="small" />} label="PDF" />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>{t('dataType')}</FormLabel>
              <RadioGroup
                value={dataType}
                onChange={(e) => setDataType(e.target.value as DataType)}
              >
                <FormControlLabel
                  value="all"
                  control={<Radio size="small" />}
                  label={t('allData')}
                />
                <FormControlLabel
                  value="current"
                  control={<Radio size="small" />}
                  label={t('currentData')}
                />
                <FormControlLabel
                  value="selected"
                  control={<Radio size="small" />}
                  label={t('selectedData')}
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('cancel')}</Button>
          <Button variant="contained" onClick={handleDownload}>
            {t('download')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
