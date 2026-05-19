import type { TreeViewDefaultItemModelProperties } from '@mui/x-tree-view';

export type TreeMenuItem = TreeViewDefaultItemModelProperties & {
    href?: string;
    children?: TreeMenuItem[];
};
