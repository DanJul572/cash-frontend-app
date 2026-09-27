import { Divider, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { welcomePageStyle } from '../styles';
import type { WelcomePagePropsType } from '../types';

export default function WelcomePage({ appName }: WelcomePagePropsType) {
  const theme = useTheme();
  console.log(theme.palette.primary.main);
  return (
    <Box sx={welcomePageStyle.containerStyle}>
      <Typography variant="h3">{appName}</Typography>
      <Divider sx={welcomePageStyle.dividerStyle} />
    </Box>
  );
}
