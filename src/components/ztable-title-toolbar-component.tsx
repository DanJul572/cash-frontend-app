import Typography from '@mui/material/Typography';

import { ztableTitleToolbarComponentStyle } from '@styles/ztable-title-toolbar-component-style';
import type { ZTableTitleToolbarComponentPropsType } from '@type-defs/ztable-component-type';

export default function ZTableTitleToolbarComponent({
  title,
}: ZTableTitleToolbarComponentPropsType) {
  return (
    <Typography variant="subtitle1" noWrap sx={ztableTitleToolbarComponentStyle.titleStyle}>
      {title}
    </Typography>
  );
}
