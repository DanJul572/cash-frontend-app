import { useTranslation } from 'react-i18next';

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import FilterAltIcon from '@mui/icons-material/FilterAlt';

import useZTableFilterToolbarComponent from '@hooks/ztable/user-ztable-filter-toolbar-component';
import { GridFilterListIcon, ToolbarButton } from '@mui/x-data-grid';
import { ztableFilterToolbarComponentStyle } from '@styles/ztable/ztable-filter-toolbar-component-style';
import type { ZTableFilterToolbarComponentPropsType } from '@type-defs/ztable/ztable-component-type';

import ZTableFilterFieldComponent from './ztable-filter-field-component';

export default function ZTableFilterToolbarComponent({
  filter,
  onFilterChange,
}: ZTableFilterToolbarComponentPropsType) {
  const { t } = useTranslation('common');

  const {
    open,
    columns,
    filterValues,
    appliedCount,
    activeCount,
    handleOpen,
    handleClose,
    updateFilter,
    clearFilter,
    applyFilters,
    clearFilters,
  } = useZTableFilterToolbarComponent({ filter, onFilterChange });

  return (
    <Box>
      <Tooltip title={t('filter')}>
        <ToolbarButton onClick={handleOpen}>
          <Badge badgeContent={appliedCount} color="primary" variant="dot">
            <GridFilterListIcon fontSize="small" />
          </Badge>
        </ToolbarButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{t('filter')}</DialogTitle>
        <DialogContent>
          <Box sx={ztableFilterToolbarComponentStyle.modalRootStyle}>
            <Box sx={ztableFilterToolbarComponentStyle.sectionHeaderStyle}>
              <Box>
                <Typography
                  variant="caption"
                  sx={ztableFilterToolbarComponentStyle.sectionDescriptionStyle}
                >
                  {t('filterDescription')}
                </Typography>
              </Box>
              {activeCount > 0 && (
                <Chip
                  size="small"
                  color="primary"
                  variant="outlined"
                  label={t('activeFilters', { count: activeCount })}
                />
              )}
            </Box>

            <Box sx={ztableFilterToolbarComponentStyle.filterListStyle}>
              {columns.map((col) => {
                return (
                  <ZTableFilterFieldComponent
                    key={col.field}
                    label={col.headerName ?? col.field}
                    filterType={col.filterType}
                    value={filterValues[col.field] ?? ''}
                    onChange={(value) => updateFilter(col.field, value)}
                    onClear={() => clearFilter(col.field)}
                  />
                );
              })}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={clearFilters} color="error" size="small">
            {t('clearFilters')}
          </Button>
          <Box sx={{ flex: 1 }} />
          <Button onClick={handleClose}>{t('cancel')}</Button>
          <Button variant="contained" startIcon={<FilterAltIcon />} onClick={applyFilters}>
            {t('apply')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
