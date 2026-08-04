import Box from '@mui/material/Box';

import { Link } from '@tanstack/react-router';

import { useCollapsibleMenuItemComponentHook } from '@hooks';
import { collapsibleMenuItemComponentStyle } from '@styles';
import type { CollapsibleMenuItemComponentPropsType } from '@types';

import CollapsibleMenuItemButtonComponent from './collapsible-menu-item-button-component';
import CollapsedMenuPopoverComponent from './collapsible-menu-popover-component';

export default function CollapsibleMenuItemComponent({
  item,
  onNavigate,
}: CollapsibleMenuItemComponentPropsType) {
  const { hasChildren, handleClick, anchorEl, setAnchorEl } = useCollapsibleMenuItemComponentHook({
    item,
    onNavigate,
  });

  return (
    <Box>
      {item.href && !hasChildren ? (
        <Link to={item.href} style={collapsibleMenuItemComponentStyle.linkStyle}>
          <CollapsibleMenuItemButtonComponent
            handleClick={handleClick}
            hasChildren={hasChildren}
            item={item}
          />
        </Link>
      ) : (
        <CollapsibleMenuItemButtonComponent
          handleClick={handleClick}
          hasChildren={hasChildren}
          item={item}
        />
      )}
      {hasChildren && (
        <CollapsedMenuPopoverComponent
          items={item.children!}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        />
      )}
    </Box>
  );
}
