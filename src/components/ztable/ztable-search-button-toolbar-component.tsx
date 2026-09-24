import { useTranslation } from 'react-i18next';

import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

import { GridSearchIcon, ToolbarButton } from '@mui/x-data-grid';
import type { ZTableSearchButtonToolbarComponentPropsType } from '@type-defs/ztable/ztable-component-type';

export default function ZTableSearchButtonToolbarComponent({
  active,
  onClick,
}: ZTableSearchButtonToolbarComponentPropsType) {
  const { t } = useTranslation('common');

  return (
    <Tooltip title={t('search')}>
      <ToolbarButton onClick={onClick}>
        <Badge invisible={!active} color="primary" variant="dot">
          <GridSearchIcon fontSize="small" />
        </Badge>
      </ToolbarButton>
    </Tooltip>
  );
}
