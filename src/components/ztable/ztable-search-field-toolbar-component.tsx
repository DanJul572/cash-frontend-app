import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { GridSearchIcon } from '@mui/x-data-grid';
import { ztableSearchToolbarComponentStyle } from '@styles/ztable/ztable-search-toolbar-component-style';
import type { ZTableSearchFieldToolbarComponentPropsType } from '@type-defs/ztable/ztable-component-type';

import IconComponent from '../icon/icon-component';

export default function ZTableSearchFieldToolbarComponent({
  open,
  value,
  onChange,
  onClear,
  onClose,
}: ZTableSearchFieldToolbarComponentPropsType) {
  const { t } = useTranslation('common');

  return (
    <Collapse in={open} unmountOnExit>
      <Box sx={ztableSearchToolbarComponentStyle.searchFieldWrapperStyle}>
        <TextField
          autoFocus
          fullWidth
          size="small"
          placeholder={t('searchPlaceholder')}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            // Keep grid keyboard navigation from handling keys typed in the field.
            event.stopPropagation();
            if (event.key === 'Escape') onClose();
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <GridSearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: value ? (
                <InputAdornment position="end">
                  <IconButton size="small" aria-label={t('clearSearch')} onClick={onClear}>
                    <IconComponent icon="ic:baseline-close" fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : null,
            },
          }}
        />
      </Box>
    </Collapse>
  );
}
