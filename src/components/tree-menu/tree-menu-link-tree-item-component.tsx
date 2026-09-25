import { alpha, styled } from '@mui/material';

import { TreeItem, treeItemClasses, useTreeItemModel } from '@mui/x-tree-view';
import type { TreeItemProps } from '@mui/x-tree-view';

import { Link } from '@tanstack/react-router';

import type { TreeMenuItem } from '@types';

import IconComponent from '../icon/icon-component';

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    color: theme.palette.primary.main,
    '& .close': {
      opacity: 0.3,
    },
  },
  // Guide line so it's clear which children belong to the opened folder.
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 12,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.3)}`,
    transition: theme.transitions.create('border-color'),
  },
  [`& .${treeItemClasses.groupTransition}:has([data-selected])`]: {
    borderLeftColor: theme.palette.primary.main,
  },
  [`& .${treeItemClasses.label}`]: {
    // Let the link overlay resolve against the whole content row, not only the label.
    position: 'static',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      display: 'block',
      width: '100%',
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
      },
    },
  },
  // Keep the expand/collapse icon clickable above the link overlay.
  [`&[aria-expanded] > .${treeItemClasses.content} > .${treeItemClasses.iconContainer}`]: {
    position: 'relative',
    zIndex: 1,
  },
}));

export default function TreeMenuLinkTreeItemComponent(props: TreeItemProps) {
  const item = useTreeItemModel<TreeMenuItem>(props.itemId);

  if (!item) {
    return null;
  }

  // Without an icon, MUI falls back to its expand/collapse chevron for folders.
  const iconProps = item.icon
    ? {
        slots: { ...props.slots, icon: IconComponent },
        slotProps: { ...props.slotProps, icon: { icon: item.icon, fontSize: 'small' } },
      }
    : {};

  if (item.href) {
    return (
      <CustomTreeItem
        {...props}
        {...iconProps}
        label={
          <Link to={item.href} onClick={(e) => e.stopPropagation()}>
            {item.label}
          </Link>
        }
      />
    );
  }

  return <CustomTreeItem {...props} {...iconProps} label={item.label} />;
}
