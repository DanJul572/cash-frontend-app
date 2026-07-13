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

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

import { useSidebarContext } from '@contexts';
import { useTopbarComponentHook } from '@hooks';
import { topbarComponentStyle } from '@styles';
import { appNameAsTitle, appVersion } from '@utils';

export default function TopbarComponent() {
    const { t } = useTranslation('common');

    const { user, anchorEl, open, handleOpen, handleClose, handleLogout, getInitials } =
        useTopbarComponentHook();

    const { toggleSidebar } = useSidebarContext();

    return (
        <Box sx={topbarComponentStyle.containerStyle}>
            <IconButton onClick={toggleSidebar} sx={topbarComponentStyle.hamburgerButtonStyle}>
                <MenuIcon sx={{ color: 'common.white' }} />
            </IconButton>

            <Box sx={topbarComponentStyle.titleSectionStyle}>
                <AccountBalanceWalletIcon sx={topbarComponentStyle.titleIconStyle} />
                <Box>
                    <Typography sx={topbarComponentStyle.titleTextStyle}>
                        {appNameAsTitle}
                    </Typography>
                    <Typography sx={topbarComponentStyle.titleSubtextStyle}>
                        v{appVersion}
                    </Typography>
                </Box>
            </Box>

            <Box sx={topbarComponentStyle.rightSectionStyle}>
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
                            <Avatar sx={topbarComponentStyle.largeAvatarStyle}>
                                {getInitials(user.name)}
                            </Avatar>
                            <Typography variant="subtitle1" sx={topbarComponentStyle.userNameStyle}>
                                {user.name}
                            </Typography>
                            <Typography variant="body2" sx={topbarComponentStyle.userEmailStyle}>
                                {user.email}
                            </Typography>
                        </Box>

                        <Divider />

                        <MenuList>
                            <MenuItem
                                onClick={handleLogout}
                                sx={topbarComponentStyle.menuItemStyle}
                            >
                                <ListItemIcon>
                                    <LogoutIcon fontSize="small" />
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
