import { useTranslation } from 'react-i18next';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { ColumnsPanelTrigger, GridViewColumnIcon } from '@mui/x-data-grid';

import { UI_TRANSLATION_NAMESPACE_CONSTANT } from '../../constants/translation-constant';

export default function ZTableColumnManagementToolbarComponent() {
  const { t } = useTranslation(UI_TRANSLATION_NAMESPACE_CONSTANT);

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
