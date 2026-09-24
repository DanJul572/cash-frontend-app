import List from '@mui/material/List';
import Popover from '@mui/material/Popover';

import { collapsedMenuPopoverComponentStyle } from '@styles/tree-menu/collapsible-menu-popover-component-style';
import type { CollapsedMenuPopoverComponentPropsType } from '@type-defs/tree-menu/collapsible-menu-popover-component-props-type';

import CollapsedMenuItemComponent from './collapsible-menu-item-component';

export default function CollapsedMenuPopoverComponent({
  items,
  anchorEl,
  onClose,
}: CollapsedMenuPopoverComponentPropsType) {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      slotProps={{
        paper: { sx: collapsedMenuPopoverComponentStyle.popoverStyle },
      }}
    >
      <List disablePadding>
        {items.map((item) => (
          <CollapsedMenuItemComponent key={item.id} item={item} onNavigate={onClose} />
        ))}
      </List>
    </Popover>
  );
}
