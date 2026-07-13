import type { TreeMenuItem } from './tree-menu-item-type';

export type CollapsibleMenuItemComponentPropsType = {
    item: TreeMenuItem;
    onNavigate: () => void;
};
