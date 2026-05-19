import { styled } from '@mui/material';
import Box from '@mui/material/Box';

import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

import { RichTreeView, TreeItem, treeItemClasses } from '@mui/x-tree-view';

import { treeMenuConfig as MUI_X_PRODUCTS } from '../configs';

const CustomTreeItem = styled(TreeItem)({
    [`& .${treeItemClasses.iconContainer}`]: {
        '& .close': {
            opacity: 0.3,
        },
    },
});

export default function CustomIcons() {
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
                items={MUI_X_PRODUCTS}
            />
        </Box>
    );
}
