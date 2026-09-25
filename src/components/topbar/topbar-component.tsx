import { useTranslation } from 'react-i18next';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import useTopbarComponentHook from '@hooks/topbar/use-topbar-component-hook';
import { topbarComponentStyle } from '@styles/topbar/topbar-component-style';

import IconComponent from '../icon/icon-component';
import TopbarRoleSelectorComponent from './topbar-role-selector-component';

export default function TopbarComponent() {
  const { t } = useTranslation('common');

  const { user, anchorEl, open, handleOpen, handleClose, handleLogout, getInitials } =
    useTopbarComponentHook();

  return (
    <Box sx={topbarComponentStyle.containerStyle}>
      <Box sx={topbarComponentStyle.rightSectionStyle}>
        <TopbarRoleSelectorComponent />
        <IconButton onClick={handleOpen} sx={topbarComponentStyle.iconButtonStyle}>
          <Avatar sx={topbarComponentStyle.avatarStyle}>{getInitials(user.name)}</Avatar>
        </IconButton>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={topbarComponentStyle.popoverStyle}
        >
          <Box sx={topbarComponentStyle.popoverContentStyle}>
            <Box sx={topbarComponentStyle.profileHeaderStyle}>
              <Avatar sx={topbarComponentStyle.largeAvatarStyle}>{getInitials(user.name)}</Avatar>
              <Typography variant="subtitle1" sx={topbarComponentStyle.userNameStyle}>
                {user.name}
              </Typography>
              <Typography variant="body2" sx={topbarComponentStyle.userEmailStyle}>
                {user.email}
              </Typography>
            </Box>
            <Divider />
            <MenuList>
              <MenuItem onClick={handleLogout} sx={topbarComponentStyle.menuItemStyle}>
                <ListItemIcon>
                  <IconComponent icon="ic:baseline-logout" fontSize="small" />
                </ListItemIcon>
                <ListItemText>{t('logout')}</ListItemText>
              </MenuItem>
            </MenuList>
          </Box>
        </Popover>
      </Box>
    </Box>
  );
}
