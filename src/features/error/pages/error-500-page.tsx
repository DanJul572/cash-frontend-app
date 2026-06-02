import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTitle } from '@hooks';

import { error500Style } from '../styles';

export default function Error500Page() {
    useTitle('500 Internal Server Error');

    return (
        <Box sx={error500Style.container}>
            <Typography variant="h1" sx={error500Style.code}>
                500
            </Typography>
            <Divider sx={error500Style.divider} />
            <Typography variant="h6" sx={error500Style.text}>
                Internal Server Error
            </Typography>
        </Box>
    );
}
