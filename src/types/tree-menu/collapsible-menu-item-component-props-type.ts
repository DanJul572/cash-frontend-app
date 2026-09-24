import type { TreeMenuItem } from '@type-defs/tree-menu-item-type';

export type CollapsibleMenuItemComponentPropsType = {
  item: TreeMenuItem;
  onNavigate: () => void;
};
