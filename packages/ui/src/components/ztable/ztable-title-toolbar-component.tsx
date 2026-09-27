import Typography from '@mui/material/Typography';

import { ztableTitleToolbarComponentStyle } from '../../styles/ztable/ztable-title-toolbar-component-style';
import type { ZTableTitleToolbarComponentPropsType } from '../../types/ztable/ztable-component-type';

export default function ZTableTitleToolbarComponent({
  title,
}: ZTableTitleToolbarComponentPropsType) {
  return (
    <Typography variant="subtitle1" noWrap sx={ztableTitleToolbarComponentStyle.titleStyle}>
      {title}
    </Typography>
  );
}
