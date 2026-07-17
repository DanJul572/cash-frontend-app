import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@hooks';

import { error404Style } from '../styles';

export default function Error404Page() {
    useTitleHook('404 Not Found');

    return (
        <Box sx={error404Style.containerStyle}>
            <Typography variant="h1" sx={error404Style.codeStyle}>
                404
            </Typography>
            <Divider sx={error404Style.dividerStyle} />
            <Typography variant="h6" sx={error404Style.textStyle}>
                Page Not Found
            </Typography>
        </Box>
    );
}
