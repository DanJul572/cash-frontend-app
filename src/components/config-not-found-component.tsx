import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@hooks';
import { configNotFoundComponentStyle } from '@styles';

export default function ConfigNotFoundComponent() {
  useTitleHook('Configuration Not Found');

  return (
    <Box sx={configNotFoundComponentStyle.containerStyle}>
      <Typography variant="h1" sx={configNotFoundComponentStyle.codeStyle}>
        400
      </Typography>
      <Divider sx={configNotFoundComponentStyle.dividerStyle} />
      <Typography variant="h6" sx={configNotFoundComponentStyle.textStyle}>
        Configuration Not Found
      </Typography>
    </Box>
  );
}
