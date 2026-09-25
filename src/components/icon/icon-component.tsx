import { styled } from '@mui/material/styles';

import { Icon } from '@iconify/react';
import { iconComponentStyle } from '@styles/icon/icon-component-style';
import type { IconComponentPropsType } from '@type-defs/icon/icon-component-props-type';

const StyledIcon = styled(Icon)({});

export default function IconComponent({
  icon,
  fontSize = 'medium',
  className,
  sx,
}: IconComponentPropsType) {
  if (!icon) {
    return null;
  }

  return (
    <StyledIcon
      icon={icon}
      width="1em"
      height="1em"
      aria-hidden
      className={className}
      sx={[
        iconComponentStyle.iconStyle,
        iconComponentStyle.fontSizeStyle[fontSize],
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
