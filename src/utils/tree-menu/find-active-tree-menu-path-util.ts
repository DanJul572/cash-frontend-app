import type { TreeMenuItem } from '@type-defs/tree-menu-item-type';

const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/+$/, '') : path);

/**
 * Returns the ids from the root down to the menu item that matches `pathname`.
 * An exact `href` match wins; otherwise the longest `href` that is a parent segment
 * of `pathname` is used (e.g. `/users/123` activates `/users`).
 */
export const findActiveTreeMenuPath = (items: TreeMenuItem[], pathname: string): string[] => {
  const currentPath = normalizePath(pathname);
  let bestPath: string[] = [];
  let bestLength = -1;

  const walk = (nodes: TreeMenuItem[], ancestors: string[]) => {
    for (const node of nodes) {
      const path = [...ancestors, node.id];

      if (node.href) {
        const href = normalizePath(node.href);
        const isMatch =
          currentPath === href || currentPath.startsWith(href === '/' ? href : `${href}/`);

        if (isMatch && href.length > bestLength) {
          bestPath = path;
          bestLength = href.length;
        }
      }

      if (node.children) {
        walk(node.children, path);
      }
    }
  };

  walk(items, []);

  return bestPath;
};
