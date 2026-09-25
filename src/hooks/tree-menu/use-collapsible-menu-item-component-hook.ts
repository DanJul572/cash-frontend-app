import { useState, type MouseEvent } from 'react';

import type { CollapsibleMenuItemComponentPropsType } from '@type-defs/tree-menu/collapsible-menu-item-component-props-type';

import useActiveTreeMenuPathHook from './use-active-tree-menu-path-hook';

export default function useCollapsibleMenuItemComponentHook({
  item,
  onNavigate,
}: CollapsibleMenuItemComponentPropsType) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const hasChildren = Boolean(item.children && item.children.length > 0);
  const isActive = useActiveTreeMenuPathHook().includes(item.id);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (hasChildren) {
      setAnchorEl(event.currentTarget);
    } else {
      onNavigate();
    }
  };

  return {
    hasChildren,
    isActive,
    handleClick,
    anchorEl,
    setAnchorEl,
  };
}
