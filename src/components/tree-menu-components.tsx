import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

import { RichTreeView } from '@mui/x-tree-view';

import { useSidebarContext } from '@contexts';
import { treeMenuComponentStyle } from '@styles';

import { treeMenuConfig } from '../configs';
import CollapsedMenuIconComponent from './collapsible-menu-icon-component';
import TreeMenuLinkTreeItemComponent from './tree-menu-link-tree-item-component';

export default function TreeMenuComponent() {
  const { isCollapsed } = useSidebarContext();

  return (
    <Card
      sx={{
        ...treeMenuComponentStyle.containerStyle,
        width: isCollapsed ? 72 : 350,
      }}
    >
      {isCollapsed ? (
        <Box sx={treeMenuComponentStyle.collapsedContainerStyle}>
          {treeMenuConfig.map((item) => (
            <CollapsedMenuIconComponent key={item.id} item={item} />
          ))}
        </Box>
      ) : (
        <RichTreeView
          slots={{
            expandIcon: Folder,
            collapseIcon: FolderOpen,
            endIcon: InsertDriveFile,
            item: TreeMenuLinkTreeItemComponent,
          }}
          items={treeMenuConfig}
        />
      )}
    </Card>
  );
}
