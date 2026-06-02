import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { topbarComponentStyle } from '@styles';

export default function TopbarComponent() {
    return (
        <Box sx={topbarComponentStyle.container}>
            <Typography>Cash App</Typography>
        </Box>
    );
}
