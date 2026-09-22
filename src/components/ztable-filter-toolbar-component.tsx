import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';

import useZTableFilterToolbarComponent from '@hooks/user-ztable-filter-toolbar-component';
import { GridFilterListIcon, ToolbarButton } from '@mui/x-data-grid';
import { ztableFilterToolbarComponentStyle } from '@styles/ztable-filter-toolbar-component-style';

export default function ZTableFilterToolbarComponent() {
  const { t } = useTranslation('common');

  const {
    open,
    columns,
    filterValues,
    handleOpen,
    handleClose,
    updateFilter,
    applyFilters,
    clearFilters,
  } = useZTableFilterToolbarComponent();

  return (
    <Box>
      <Tooltip title={t('filter')}>
        <ToolbarButton onClick={handleOpen}>
          <GridFilterListIcon fontSize="small" />
        </ToolbarButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{t('filter')}</DialogTitle>
        <DialogContent>
          <Box sx={ztableFilterToolbarComponentStyle.dialogContentStyle}>
            {columns.map((col) => (
              <TextField
                key={col.field}
                size="small"
                label={col.headerName ?? col.field}
                value={filterValues[col.field] ?? ''}
                onChange={(e) => updateFilter(col.field, e.target.value)}
                sx={ztableFilterToolbarComponentStyle.filterValueStyle}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={clearFilters} color="error" size="small">
            {t('clearFilters')}
          </Button>
          <Box sx={{ flex: 1 }} />
          <Button onClick={handleClose}>{t('cancel')}</Button>
          <Button variant="contained" onClick={applyFilters}>
            {t('apply')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
