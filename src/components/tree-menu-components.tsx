import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

import { RichTreeView } from '@mui/x-tree-view';

import { TreeMenuSkeletonComponent } from '@components';
import { useSidebarContext } from '@contexts';
import { useTreeMenuQuery } from '@queries';
import { treeMenuComponentStyle } from '@styles';

import CollapsedMenuIconComponent from './collapsible-menu-icon-component';
import TreeMenuLinkTreeItemComponent from './tree-menu-link-tree-item-component';

export default function TreeMenuComponent() {
  const { t } = useTranslation('common');
  const { isCollapsed } = useSidebarContext();
  const { data, isPending, isError } = useTreeMenuQuery();

  if (isPending) {
    return <TreeMenuSkeletonComponent />;
  }

  if ((isError || !data) && !isPending) {
    return (
      <Card style={treeMenuComponentStyle.containerStyle}>
        <Box style={treeMenuComponentStyle.subContainerStyle}>
          <Typography variant="body2" color="error">
            {t('sidebar.treeMenuError')}
          </Typography>
        </Box>
      </Card>
    );
  }

  if (isCollapsed) {
    return (
      <Card
        style={{
          ...treeMenuComponentStyle.containerStyle,
          width: isCollapsed ? 72 : 350,
        }}
      >
        <Box style={treeMenuComponentStyle.collapsedContainerStyle}>
          {data.items.map((item) => (
            <CollapsedMenuIconComponent key={item.id} item={item} />
          ))}
        </Box>
      </Card>
    );
  }

  return (
    <Card
      style={{
        ...treeMenuComponentStyle.containerStyle,
        width: isCollapsed ? 72 : 350,
      }}
    >
      <RichTreeView
        slots={{
          expandIcon: Folder,
          collapseIcon: FolderOpen,
          endIcon: InsertDriveFile,
          item: TreeMenuLinkTreeItemComponent,
        }}
        items={data.items}
      />
    </Card>
  );
}
