import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import useCollapsibleMenuIconComponentHook from '@hooks/tree-menu/use-collapsible-menu-icon-component-hook';
import { collapsibleMenuIconStyle } from '@styles/tree-menu/collapsible-menu-icon-component-style';
import type { CollapsibleMenuIconComponentPropsType } from '@type-defs/tree-menu/collapsible-menu-icon-component-props-type';

import IconComponent from '../icon/icon-component';
import CollapsedMenuPopoverComponent from './collapsible-menu-popover-component';

export default function CollapsedMenuIconComponent({
  item,
}: CollapsibleMenuIconComponentPropsType) {
  const { handleClick, hasChildren, isActive, anchorEl, setAnchorEl } =
    useCollapsibleMenuIconComponentHook({
      item,
    });

  // The collapsed sidebar only shows icons, so fall back to a generic one.
  const icon = item.icon ?? (hasChildren ? 'ic:baseline-folder' : 'ic:baseline-insert-drive-file');

  return (
    <Box>
      <Tooltip title={item.label} placement="right" arrow>
        <IconButton
          size="small"
          onClick={handleClick}
          sx={[
            collapsibleMenuIconStyle.buttonStyle,
            isActive && collapsibleMenuIconStyle.activeButtonStyle,
          ]}
        >
          <IconComponent icon={icon} fontSize="small" />
        </IconButton>
      </Tooltip>
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
