import { useState, type MouseEvent } from 'react';

import Box from '@mui/material/Box';

import { Link } from '@tanstack/react-router';

import type { TreeMenuItem } from '@types';

import CollapsibleMenuItemButtonComponent from './collapsible-menu-item-button-component';
import CollapsedMenuPopoverComponent from './collapsible-menu-popover-component';

interface CollapsedMenuItemProps {
    item: TreeMenuItem;
    onNavigate: () => void;
}

export default function CollapsibleMenuItemComponent({ item, onNavigate }: CollapsedMenuItemProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const hasChildren = Boolean(item.children && item.children.length > 0);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        if (hasChildren) {
            setAnchorEl(event.currentTarget);
        } else {
            onNavigate();
        }
    };

    return (
        <Box>
            {item.href && !hasChildren ? (
                <Link to={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <CollapsibleMenuItemButtonComponent
                        handleClick={handleClick}
                        hasChildren={hasChildren}
                        item={item}
                    />
                </Link>
            ) : (
                <CollapsibleMenuItemButtonComponent
                    handleClick={handleClick}
                    hasChildren={hasChildren}
                    item={item}
                />
            )}
            {hasChildren && (
                <CollapsedMenuPopoverComponent
                    items={item.children!}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                />
            )}
        </Box>
    );
}
