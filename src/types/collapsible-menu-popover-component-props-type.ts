import type { TreeMenuItem } from './tree-menu-item-type';

export type CollapsedMenuPopoverComponentPropsType = {
    items: TreeMenuItem[];
    anchorEl: HTMLElement | null;
    onClose: () => void;
};
