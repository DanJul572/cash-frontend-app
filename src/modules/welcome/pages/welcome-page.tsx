import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { appNameAsTitle } from '@utils';

import { welcomePageStyle } from '../styles';

export default function WelcomePage() {
    return (
        <Box sx={welcomePageStyle.containerStyle}>
            <Typography variant="h3">{appNameAsTitle}</Typography>
        </Box>
    );
}
