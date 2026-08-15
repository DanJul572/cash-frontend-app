import { useTranslation } from 'react-i18next';

import { Tooltip } from '@mui/material';

import { FilterPanelTrigger, GridFilterListIcon, ToolbarButton } from '@mui/x-data-grid';

export default function ZTableFilterToolbarComponent() {
  const { t } = useTranslation('common');

  return (
    <Tooltip title={t('filter')}>
      <FilterPanelTrigger render={<ToolbarButton />}>
        <GridFilterListIcon fontSize="small" />
      </FilterPanelTrigger>
    </Tooltip>
  );
}
