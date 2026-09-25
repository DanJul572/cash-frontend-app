import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import useTopbarRoleSelectorComponentHook from '@hooks/topbar/use-topbar-role-selector-component-hook';
import { topbarRoleSelectorComponentStyle } from '@styles/topbar/topbar-role-selector-component-style';

import IconComponent from '../icon/icon-component';

export default function TopbarRoleSelectorComponent() {
  const { t } = useTranslation('common');

  const { roles, activeRole, anchorEl, open, handleOpen, handleClose, handleSelectRole } =
    useTopbarRoleSelectorComponentHook();

  if (!activeRole) {
    return null;
  }

  return (
    <Box>
      <Button
        variant="text"
        onClick={handleOpen}
        endIcon={
          <IconComponent
            icon={open ? 'ic:baseline-keyboard-arrow-up' : 'ic:baseline-keyboard-arrow-down'}
            fontSize="small"
          />
        }
        sx={topbarRoleSelectorComponentStyle.buttonStyle}
      >
        {activeRole.roleName}
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={topbarRoleSelectorComponentStyle.menuStyle}
      >
        <Typography variant="caption" sx={topbarRoleSelectorComponentStyle.menuHeaderStyle}>
          {t('selectRole')}
        </Typography>
        <Divider />
        {roles.map((role) => (
          <MenuItem
            key={role.roleId}
            selected={role.roleId === activeRole.roleId}
            onClick={() => handleSelectRole(role.roleId)}
            sx={topbarRoleSelectorComponentStyle.menuItemStyle}
          >
            <ListItemText>{role.roleName}</ListItemText>
            {role.roleId === activeRole.roleId && (
              <ListItemIcon>
                <IconComponent
                  icon="ic:baseline-check"
                  fontSize="small"
                  sx={topbarRoleSelectorComponentStyle.checkIconStyle}
                />
              </ListItemIcon>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
