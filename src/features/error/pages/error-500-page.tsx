import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { error500Style } from '../styles';

export default function Error500Page() {
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
