import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

import { RichTreeView, TreeItem, treeItemClasses } from '@mui/x-tree-view';

import { treeMenuConfig } from '../configs';

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
        color: theme.palette.primary.main,
        '& .close': {
            opacity: 0.3,
        },
    },
}));

export default function TreeMenuComponent() {
    return (
        <Box>
            <RichTreeView
                defaultExpandedItems={['grid']}
                slots={{
                    expandIcon: Folder,
                    collapseIcon: FolderOpen,
                    endIcon: InsertDriveFile,
                    item: CustomTreeItem,
                }}
                items={treeMenuConfig}
            />
        </Box>
    );
}
