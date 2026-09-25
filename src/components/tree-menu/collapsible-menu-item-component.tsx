import { Link } from '@tanstack/react-router';

import useCollapsibleMenuItemComponentHook from '@hooks/tree-menu/use-collapsible-menu-item-component-hook';
import { collapsibleMenuItemComponentStyle } from '@styles/tree-menu/collapsible-menu-item-component-style';
import type { CollapsibleMenuItemComponentPropsType } from '@type-defs/tree-menu/collapsible-menu-item-component-props-type';

import CollapsibleMenuItemButtonComponent from './collapsible-menu-item-button-component';
import CollapsedMenuPopoverComponent from './collapsible-menu-popover-component';

export default function CollapsibleMenuItemComponent({
  item,
  onNavigate,
}: CollapsibleMenuItemComponentPropsType) {
  const { hasChildren, isActive, handleClick, anchorEl, setAnchorEl } =
    useCollapsibleMenuItemComponentHook({
      item,
      onNavigate,
    });

  if (item.href && !hasChildren) {
    return (
      <Link to={item.href} style={collapsibleMenuItemComponentStyle.linkStyle}>
        <CollapsibleMenuItemButtonComponent
          handleClick={handleClick}
          hasChildren={hasChildren}
          isActive={isActive}
          item={item}
        />
      </Link>
    );
  }

  if (!item.href && !hasChildren) {
    return (
      <CollapsibleMenuItemButtonComponent
        handleClick={handleClick}
        hasChildren={hasChildren}
        isActive={isActive}
        item={item}
      />
    );
  }

  return (
    <CollapsedMenuPopoverComponent
      items={item.children!}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
    />
  );
}
