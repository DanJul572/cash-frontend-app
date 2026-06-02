import { styled } from '@mui/material';
import Card from '@mui/material/Card';

import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

import { RichTreeView, TreeItem, treeItemClasses, useTreeItemModel } from '@mui/x-tree-view';
import type { TreeItemProps } from '@mui/x-tree-view';

import { treeMenuComponentStyle } from '@styles';
import { Link } from '@tanstack/react-router';
import type { TreeMenuItem } from '@types';

import { treeMenuConfig } from '../configs';

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
        color: theme.palette.primary.main,
        '& .close': {
            opacity: 0.3,
        },
    },
    [`& .${treeItemClasses.label}`]: {
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
            display: 'block',
            width: '100%',
        },
    },
}));

function LinkTreeItem(props: TreeItemProps) {
    const item = useTreeItemModel<TreeMenuItem>(props.itemId);

    const label = item?.href ? (
        <Link to={item.href} onClick={(e) => e.stopPropagation()}>
            {item.label}
        </Link>
    ) : (
        item?.label
    );

    return <CustomTreeItem {...props} label={label} />;
}

export default function TreeMenuComponent() {
    return (
        <Card sx={treeMenuComponentStyle.container}>
            <RichTreeView
                slots={{
                    expandIcon: Folder,
                    collapseIcon: FolderOpen,
                    endIcon: InsertDriveFile,
                    item: LinkTreeItem,
                }}
                items={treeMenuConfig}
            />
        </Card>
    );
}
