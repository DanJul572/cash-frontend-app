import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Folder from '@mui/icons-material/Folder';
import FolderOpen from '@mui/icons-material/FolderOpen';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

import { RichTreeView, TreeItem, treeItemClasses, useTreeItemModel } from '@mui/x-tree-view';
import type { TreeItemProps } from '@mui/x-tree-view';

import { Link } from '@tanstack/react-router';

import { useSidebarContext } from '@contexts';
import { treeMenuComponentStyle } from '@styles';
import type { TreeMenuItem } from '@types';

import { treeMenuConfig } from '../configs';
import CollapsedMenuIconComponent from './collapsible-menu-icon-component';

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
    const { isCollapsed } = useSidebarContext();

    return (
        <Card
            sx={{
                ...treeMenuComponentStyle.container,
                width: isCollapsed ? 72 : 350,
                transition: 'width 0.3s ease-in-out',
                overflowX: 'hidden',
            }}
        >
            {isCollapsed ? (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pt: 1,
                    }}
                >
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
                        item: LinkTreeItem,
                    }}
                    items={treeMenuConfig}
                />
            )}
        </Card>
    );
}
