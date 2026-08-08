import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useLocation } from '@tanstack/react-router';

import { useTitleHook } from '@hooks';

import { error404Style } from '../styles';

export default function Error404Page() {
  const location = useLocation();

  useTitleHook('404 Page Not Found');

  let message = 'Page Not Found';
  if (location.state && location.state.message) {
    message = location.state.message;
  }

  return (
    <Box sx={error404Style.containerStyle}>
      <Typography variant="h1" sx={error404Style.codeStyle}>
        404
      </Typography>
      <Divider sx={error404Style.dividerStyle} />
      <Typography variant="h6" sx={error404Style.textStyle}>
        {message}
      </Typography>
    </Box>
  );
}
