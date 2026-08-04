import { useState, type MouseEvent } from 'react';

import type { CollapsibleMenuIconComponentPropsType } from '@types';

export default function useCollapsibleMenuIconComponentHook({
  item,
}: CollapsibleMenuIconComponentPropsType) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (hasChildren) {
      setAnchorEl(event.currentTarget);
    }
  };

  return {
    anchorEl,
    setAnchorEl,
    hasChildren,
    handleClick,
  };
}
