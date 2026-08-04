import type { MouseEvent } from 'react';

import type { TreeMenuItem } from './tree-menu-item-type';

export type CollapsibleMenuItemButtonComponentPropsType = {
  handleClick: (event: MouseEvent<HTMLElement>) => void;
  hasChildren: boolean;
  item: TreeMenuItem;
};
