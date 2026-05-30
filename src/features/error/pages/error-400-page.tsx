import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTitle } from '@hooks';

import { error404Style } from '../styles';

export default function Error404Page() {
    useTitle('404 Not Found');

    return (
        <Box sx={error404Style.container}>
            <Typography variant="h1" sx={error404Style.code}>
                404
            </Typography>
            <Divider sx={error404Style.divider} />
            <Typography variant="h6" sx={error404Style.text}>
                Page Not Found
            </Typography>
        </Box>
    );
}
