import type { TreeViewDefaultItemModelProperties } from '@mui/x-tree-view';

export type TreeMenuItem = TreeViewDefaultItemModelProperties & {
  href?: string;
  /** Iconify icon name, e.g. `ic:baseline-dashboard`. */
  icon?: string;
  children?: TreeMenuItem[];
};
