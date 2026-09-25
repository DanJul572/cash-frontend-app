import { useLocation } from '@tanstack/react-router';

import { useTreeMenuQuery } from '@queries';
import { findActiveTreeMenuPath } from '@utils/tree-menu/find-active-tree-menu-path-util';

export default function useActiveTreeMenuPathHook() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const { data } = useTreeMenuQuery();

  return data ? findActiveTreeMenuPath(data.items, pathname) : [];
}
