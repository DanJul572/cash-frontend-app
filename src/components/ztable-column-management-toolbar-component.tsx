import { useTranslation } from 'react-i18next';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { ColumnsPanelTrigger, GridViewColumnIcon } from '@mui/x-data-grid';

export default function ZTableColumnManagementToolbarComponent() {
  const { t } = useTranslation('common');

  return (
    <ColumnsPanelTrigger
      render={(props) => (
        <Tooltip title={t('columns')}>
          <IconButton {...props} size="small">
            <GridViewColumnIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    />
  );
}
