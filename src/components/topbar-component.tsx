import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { topbarComponentStyle } from '@styles';
import { appNameAsTitle } from '@utils';

export default function TopbarComponent() {
    return (
        <Box sx={topbarComponentStyle.container}>
            <Typography>{appNameAsTitle}</Typography>
        </Box>
    );
}
