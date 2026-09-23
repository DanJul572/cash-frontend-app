import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
  DATA_TYPE_OPTION_CONSTANT,
  FILE_TYPE_OPTION_CONSTANT,
} from '@constants/ztable-download-tollbar-component-constant';
import useZTableDownloadButtonComponent from '@hooks/user-ztable-download-tollbar-component';
import { GridDownloadIcon, ToolbarButton } from '@mui/x-data-grid';
import { ztableDownloadTollbarComponentStyle } from '@styles/ztable-download-tollbar-component-style';
import type { ZTableDownloadToolbarComponentPropsType } from '@type-defs/ztable-component-type';

export default function ZTableDownloadToolbarComponent({
  onDownload,
}: ZTableDownloadToolbarComponentPropsType) {
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
  } = useZTableDownloadButtonComponent({ onDownload });

  return (
    <Box>
      <Tooltip title={t('download')}>
        <ToolbarButton onClick={handleOpen}>
          <GridDownloadIcon />
        </ToolbarButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{t('download')}</DialogTitle>
        <DialogContent>
          <Box sx={ztableDownloadTollbarComponentStyle.modalRootStyle}>
            <Box>
              <Typography
                variant="caption"
                sx={ztableDownloadTollbarComponentStyle.sectionLabelStyle}
              >
                {t('fileType')}
              </Typography>
              <Box sx={ztableDownloadTollbarComponentStyle.fileTypeGridStyle}>
                {FILE_TYPE_OPTION_CONSTANT.map((option) => {
                  const selected = fileType === option.value;
                  const Icon = option.icon;

                  return (
                    <ButtonBase
                      key={option.value}
                      onClick={() => setFileType(option.value)}
                      sx={[
                        ztableDownloadTollbarComponentStyle.fileTypeCardStyle,
                        selected && ztableDownloadTollbarComponentStyle.selectedCardStyle,
                      ]}
                    >
                      <Icon sx={{ color: selected ? 'primary.main' : option.color }} />
                      <Typography variant="caption" sx={{ fontWeight: selected ? 700 : 500 }}>
                        {option.label}
                      </Typography>
                    </ButtonBase>
                  );
                })}
              </Box>
            </Box>

            <Box>
              <Typography
                variant="caption"
                sx={ztableDownloadTollbarComponentStyle.sectionLabelStyle}
              >
                {t('dataType')}
              </Typography>
              <Box sx={ztableDownloadTollbarComponentStyle.dataTypeListStyle}>
                {DATA_TYPE_OPTION_CONSTANT.map((option) => {
                  const selected = dataType === option.value;
                  const Icon = option.icon;

                  return (
                    <ButtonBase
                      key={option.value}
                      onClick={() => setDataType(option.value)}
                      sx={[
                        ztableDownloadTollbarComponentStyle.dataTypeCardStyle,
                        selected && ztableDownloadTollbarComponentStyle.selectedCardStyle,
                      ]}
                    >
                      <Icon fontSize="small" />
                      <Box
                        component="span"
                        sx={ztableDownloadTollbarComponentStyle.dataTypeTextStyle}
                      >
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{ display: 'block', fontWeight: selected ? 700 : 500 }}
                        >
                          {t(option.labelKey)}
                        </Typography>
                        <Typography variant="caption" component="span" color="text.secondary">
                          {t(option.descriptionKey)}
                        </Typography>
                      </Box>
                      {selected && <CheckCircleIcon fontSize="small" color="primary" />}
                    </ButtonBase>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('cancel')}</Button>
          <Button variant="contained" startIcon={<GridDownloadIcon />} onClick={handleDownload}>
            {t('download')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
