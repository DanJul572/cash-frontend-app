import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@hooks';

import { error500Style } from '../styles';

export default function Error500Page() {
    useTitleHook('500 Internal Server Error');

    return (
        <Box sx={error500Style.containerStyle}>
            <Typography variant="h1" sx={error500Style.codeStyle}>
                500
            </Typography>
            <Divider sx={error500Style.dividerStyle} />
            <Typography variant="h6" sx={error500Style.textStyle}>
                Internal Server Error
            </Typography>
        </Box>
    );
}
