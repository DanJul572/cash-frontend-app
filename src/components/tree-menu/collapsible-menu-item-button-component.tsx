import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { collapsibleMenuItemButtonComponentStyle } from '@styles/tree-menu/collapsible-menu-item-button-component-style';
import type { CollapsibleMenuItemButtonComponentPropsType } from '@type-defs/tree-menu/collapsible-menu-item-button-component-props-type';

import IconComponent from '../icon/icon-component';

export default function CollapsibleMenuItemButtonComponent({
  handleClick,
  hasChildren,
  isActive,
  item,
}: CollapsibleMenuItemButtonComponentPropsType) {
  return (
    <ListItemButton
      onClick={handleClick}
      selected={isActive}
      dense
      sx={collapsibleMenuItemButtonComponentStyle.listItemButtonStyle}
    >
      <ListItemIcon sx={collapsibleMenuItemButtonComponentStyle.listItemIconStyle}>
        <IconComponent
          icon={item.icon}
          fontSize="small"
          sx={collapsibleMenuItemButtonComponentStyle.iconStyle}
        />
      </ListItemIcon>
      <ListItemText primary={item.label} />
      {hasChildren && (
        <IconComponent
          icon="ic:baseline-chevron-right"
          fontSize="small"
          sx={collapsibleMenuItemButtonComponentStyle.chevronRightStyle}
        />
      )}
    </ListItemButton>
  );
}
