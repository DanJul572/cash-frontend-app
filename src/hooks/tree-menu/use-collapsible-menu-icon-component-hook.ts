import { useState, type MouseEvent } from 'react';

import type { CollapsibleMenuIconComponentPropsType } from '@type-defs/tree-menu/collapsible-menu-icon-component-props-type';

import useActiveTreeMenuPathHook from './use-active-tree-menu-path-hook';

export default function useCollapsibleMenuIconComponentHook({
  item,
}: CollapsibleMenuIconComponentPropsType) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = useActiveTreeMenuPathHook().includes(item.id);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (hasChildren) {
      setAnchorEl(event.currentTarget);
    }
  };

  return {
    anchorEl,
    setAnchorEl,
    hasChildren,
    isActive,
    handleClick,
  };
}
