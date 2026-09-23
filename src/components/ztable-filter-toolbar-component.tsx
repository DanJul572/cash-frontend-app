import { useTranslation } from 'react-i18next';

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';

import {
  FILTER_COLUMN_DEFAULT_ICON_CONSTANT,
  FILTER_COLUMN_ICON_CONSTANT,
} from '@constants/ztable-filter-toolbar-component-constant';
import useZTableFilterToolbarComponent from '@hooks/user-ztable-filter-toolbar-component';
import { GridFilterListIcon, ToolbarButton } from '@mui/x-data-grid';
import { ztableFilterToolbarComponentStyle } from '@styles/ztable-filter-toolbar-component-style';
import type { ZTableFilterToolbarComponentPropsType } from '@type-defs/ztable-component-type';

export default function ZTableFilterToolbarComponent({
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
  } = useZTableFilterToolbarComponent({ onFilterChange });

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
                  sx={ztableFilterToolbarComponentStyle.sectionLabelStyle}
                >
                  {t('columns')}
                </Typography>
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

            <Box sx={ztableFilterToolbarComponentStyle.filterGridStyle}>
              {columns.map((col) => {
                const value = filterValues[col.field] ?? '';
                const active = value.trim() !== '';
                const Icon =
                  (col.type && FILTER_COLUMN_ICON_CONSTANT[col.type]) ??
                  FILTER_COLUMN_DEFAULT_ICON_CONSTANT;

                return (
                  <Box
                    key={col.field}
                    sx={[
                      ztableFilterToolbarComponentStyle.filterCardStyle,
                      active && ztableFilterToolbarComponentStyle.activeCardStyle,
                    ]}
                  >
                    <Box sx={ztableFilterToolbarComponentStyle.filterIconStyle}>
                      <Icon fontSize="small" />
                    </Box>
                    <Box sx={ztableFilterToolbarComponentStyle.filterFieldStyle}>
                      <Typography
                        variant="caption"
                        component="label"
                        htmlFor={`ztable-filter-${col.field}`}
                        sx={ztableFilterToolbarComponentStyle.filterLabelStyle}
                      >
                        {col.headerName ?? col.field}
                      </Typography>
                      <TextField
                        id={`ztable-filter-${col.field}`}
                        size="small"
                        fullWidth
                        placeholder={t('filterPlaceholder')}
                        value={value}
                        onChange={(e) => updateFilter(col.field, e.target.value)}
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                              </InputAdornment>
                            ),
                            endAdornment: active && (
                              <InputAdornment position="end">
                                <IconButton
                                  size="small"
                                  edge="end"
                                  aria-label={t('clearFilters')}
                                  onClick={() => clearFilter(col.field)}
                                >
                                  <CloseIcon fontSize="small" />
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    </Box>
                  </Box>
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
