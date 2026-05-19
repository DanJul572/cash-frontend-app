import { pageLoaderStyle } from '@/styles';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function PageLoaderComponent() {
    return (
        <Box sx={pageLoaderStyle.container}>
            <CircularProgress />
        </Box>
    );
}
