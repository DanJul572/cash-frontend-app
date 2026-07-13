import List from '@mui/material/List';
import Popover from '@mui/material/Popover';

import type { TreeMenuItem } from '@types';

import CollapsedMenuItemComponent from './collapsible-menu-item-component';

interface CollapsedMenuPopoverComponentProps {
    items: TreeMenuItem[];
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

export default function CollapsedMenuPopoverComponent({
    items,
    anchorEl,
    onClose,
}: CollapsedMenuPopoverComponentProps) {
    return (
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            slotProps={{
                paper: { sx: { minWidth: 220, py: 0.5 } },
            }}
        >
            <List disablePadding>
                {items.map((item) => (
                    <CollapsedMenuItemComponent key={item.id} item={item} onNavigate={onClose} />
                ))}
            </List>
        </Popover>
    );
}
