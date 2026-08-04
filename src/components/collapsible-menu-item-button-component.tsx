import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ChevronRight from '@mui/icons-material/ChevronRight';
import Folder from '@mui/icons-material/Folder';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';

import { collapsibleMenuItemButtonComponentStyle } from '@styles';
import type { CollapsibleMenuItemButtonComponentPropsType } from '@types';

export default function CollapsibleMenuItemButtonComponent({
  handleClick,
  hasChildren,
  item,
}: CollapsibleMenuItemButtonComponentPropsType) {
  const Icon = hasChildren ? Folder : InsertDriveFile;

  return (
    <ListItemButton
      onClick={handleClick}
      dense
      sx={collapsibleMenuItemButtonComponentStyle.listItemButtonStyle}
    >
      <ListItemIcon sx={collapsibleMenuItemButtonComponentStyle.listItemButtonStyle}>
        <Icon fontSize="small" sx={collapsibleMenuItemButtonComponentStyle.iconStyle} />
      </ListItemIcon>
      <ListItemText primary={item.label} />
      {hasChildren && (
        <ChevronRight
          fontSize="small"
          sx={collapsibleMenuItemButtonComponentStyle.chevronRightStyle}
        />
      )}
    </ListItemButton>
  );
}
