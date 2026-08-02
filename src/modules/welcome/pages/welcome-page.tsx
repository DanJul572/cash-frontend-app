import { Divider, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { appNameAsTitle } from '@utils';

import { welcomePageStyle } from '../styles';

export default function WelcomePage() {
    const theme = useTheme();
    console.log(theme.palette.primary.main);
    return (
        <Box sx={welcomePageStyle.containerStyle}>
            <Typography variant="h3">{appNameAsTitle}</Typography>
            <Divider sx={welcomePageStyle.dividerStyle} />
        </Box>
    );
}
