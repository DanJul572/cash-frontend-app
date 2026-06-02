import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { pageLoaderComponentStyle } from '@styles';

export default function PageLoaderComponent() {
    return (
        <Box sx={pageLoaderComponentStyle.container}>
            <CircularProgress />
        </Box>
    );
}
