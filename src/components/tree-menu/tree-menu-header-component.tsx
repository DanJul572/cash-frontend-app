import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Link } from '@tanstack/react-router';

import logo from '@assets/logo.svg';
import { treeMenuHeaderComponentStyle } from '@styles/tree-menu/tree-menu-header-component-style';
import { appNameAsTitle, appVersion } from '@utils';

export default function TreeMenuHeaderComponent() {
  return (
    <Box style={treeMenuHeaderComponentStyle.containerStyle}>
      <Link to="/dashboard" style={treeMenuHeaderComponentStyle.logoLinkStyle}>
        <img src={logo} alt={appNameAsTitle} style={treeMenuHeaderComponentStyle.logoStyle} />
      </Link>
      <Typography color="text.secondary" style={treeMenuHeaderComponentStyle.versionStyle}>
        v{appVersion}
      </Typography>
    </Box>
  );
}
