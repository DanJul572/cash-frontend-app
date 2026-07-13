import { styled } from '@mui/material';

import { TreeItem, treeItemClasses, useTreeItemModel } from '@mui/x-tree-view';
import type { TreeItemProps } from '@mui/x-tree-view';

import { Link } from '@tanstack/react-router';

import type { TreeMenuItem } from '@types';

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

export default function TreeMenuLinkTreeItemComponent(props: TreeItemProps) {
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
