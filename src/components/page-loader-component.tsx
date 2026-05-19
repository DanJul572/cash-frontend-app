import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { pageLoaderStyle } from '@/styles';

export default function PageLoaderComponent() {
    return (
        <Box sx={pageLoaderStyle.container}>
            <CircularProgress />
        </Box>
    );
}
