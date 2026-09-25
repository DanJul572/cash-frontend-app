import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Folder from '@mui/icons-material/Folder';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

import useCollapsibleMenuIconComponentHook from '@hooks/tree-menu/use-collapsible-menu-icon-component-hook';
import { collapsibleMenuIconStyle } from '@styles/tree-menu/collapsible-menu-icon-component-style';
import type { CollapsibleMenuIconComponentPropsType } from '@type-defs/tree-menu/collapsible-menu-icon-component-props-type';

import CollapsedMenuPopoverComponent from './collapsible-menu-popover-component';

export default function CollapsedMenuIconComponent({
  item,
}: CollapsibleMenuIconComponentPropsType) {
  const { handleClick, hasChildren, isActive, anchorEl, setAnchorEl } =
    useCollapsibleMenuIconComponentHook({
      item,
    });

  const Icon = hasChildren ? Folder : InsertDriveFile;

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
          <Icon fontSize="small" />
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
