import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { RichTreeView } from '@mui/x-tree-view';

import useTreeMenuComponentHook from '@hooks/tree-menu/use-tree-menu-component-hook';
import { useTreeMenuQuery } from '@queries';
import { treeMenuComponentStyle } from '@styles/tree-menu/tree-menu-component-style';

import TreeMenuLinkTreeItemComponent from './tree-menu-link-tree-item-component';
import TreeMenuSkeletonComponent from './tree-menu-skeleton-component';

export default function TreeMenuComponent() {
  const { t } = useTranslation('common');
  const { data, isPending, isError } = useTreeMenuQuery();
  const { activeItemId, expandedItems, handleExpandedItemsChange } = useTreeMenuComponentHook();

  if (isPending) {
    return <TreeMenuSkeletonComponent />;
  }

  if ((isError || !data) && !isPending) {
    return (
      <Card style={treeMenuComponentStyle.containerStyle}>
        <Box style={treeMenuComponentStyle.subContainerStyle}>
          <Typography variant="body2" color="error">
            {t('treeMenuNotAvailable')}
          </Typography>
        </Box>
      </Card>
    );
  }

  return (
    <Card style={treeMenuComponentStyle.containerStyle}>
      <RichTreeView
        slots={{ item: TreeMenuLinkTreeItemComponent }}
        items={data.items}
        itemChildrenIndentation={0}
        selectedItems={activeItemId}
        expandedItems={expandedItems}
        onExpandedItemsChange={handleExpandedItemsChange}
      />
    </Card>
  );
}
