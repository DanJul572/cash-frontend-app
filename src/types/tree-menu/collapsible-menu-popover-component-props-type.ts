import type { TreeMenuItem } from '@type-defs/tree-menu-item-type';

export type CollapsedMenuPopoverComponentPropsType = {
  items: TreeMenuItem[];
  anchorEl: HTMLElement | null;
  onClose: () => void;
};
