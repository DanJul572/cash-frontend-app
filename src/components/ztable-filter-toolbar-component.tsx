import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';

import useZTableFilterToolbarComponent from '@hooks/user-ztable-filter-toolbar-component';
import { GridFilterListIcon, GridAddIcon, GridDeleteIcon, ToolbarButton } from '@mui/x-data-grid';
import { ztableFilterToolbarComponentStyle } from '@styles/ztable-filter-toolbar-component-style';

export default function ZTableFilterToolbarComponent() {
  const { t } = useTranslation('common');

  const {
    open,
    columns,
    logicOperator,
    filterConditions,
    setLogicOperator,
    handleOpen,
    handleClose,
    addFilter,
    removeFilter,
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
            {filterConditions.length > 1 && (
              <ToggleButtonGroup
                value={logicOperator}
                exclusive
                onChange={(_, value) => {
                  if (value !== null) setLogicOperator(value);
                }}
                size="small"
                fullWidth
              >
                <ToggleButton value="and">{t('and')}</ToggleButton>
                <ToggleButton value="or">{t('or')}</ToggleButton>
              </ToggleButtonGroup>
            )}

            {filterConditions.map((condition, index) => (
              <Box key={condition.id} sx={ztableFilterToolbarComponentStyle.filterRowStyle}>
                {index > 0 && filterConditions.length > 1 && (
                  <Box sx={ztableFilterToolbarComponentStyle.logicOperatorLabelStyle}>
                    {logicOperator === 'and' ? t('and') : t('or')}
                  </Box>
                )}
                <Box sx={ztableFilterToolbarComponentStyle.filterRowContentStyle}>
                  <FormControl
                    size="small"
                    sx={ztableFilterToolbarComponentStyle.filterSelectStyle}
                  >
                    <InputLabel>{t('column')}</InputLabel>
                    <Select
                      value={condition.field}
                      label={t('column')}
                      onChange={(e) => updateFilter(condition.id, { field: e.target.value })}
                    >
                      {columns.map((col) => (
                        <MenuItem key={col.field} value={col.field}>
                          {col.headerName ?? col.field}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    size="small"
                    label={t('value')}
                    value={condition.value ?? ''}
                    onChange={(e) => {
                      const val = e.target.value || null;
                      updateFilter(condition.id, { value: val });
                    }}
                    sx={ztableFilterToolbarComponentStyle.filterValueStyle}
                  />

                  <IconButton
                    size="small"
                    onClick={() => removeFilter(condition.id)}
                    disabled={filterConditions.length <= 1}
                  >
                    <GridDeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            ))}

            <Button startIcon={<GridAddIcon />} onClick={addFilter} size="small">
              {t('addFilter')}
            </Button>
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
