import { useState, type SyntheticEvent } from 'react';

import useActiveTreeMenuPathHook from './use-active-tree-menu-path-hook';

export default function useTreeMenuComponentHook() {
  const activePath = useActiveTreeMenuPathHook();
  const activeItemId = activePath.at(-1) ?? null;
  const activeAncestorIds = activePath.slice(0, -1);

  const [expandedItems, setExpandedItems] = useState<string[]>(activeAncestorIds);
  const [prevActiveItemId, setPrevActiveItemId] = useState(activeItemId);

  // Keep the active item visible when the URL changes (e.g. back/forward, direct link).
  if (prevActiveItemId !== activeItemId) {
    setPrevActiveItemId(activeItemId);
    setExpandedItems((prev) => Array.from(new Set([...prev, ...activeAncestorIds])));
  }

  const handleExpandedItemsChange = (_event: SyntheticEvent | null, itemIds: string[]) => {
    setExpandedItems(itemIds);
  };

  return {
    activeItemId,
    expandedItems,
    handleExpandedItemsChange,
  };
}
