import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useLocation } from '@tanstack/react-router';

import { useTitleHook } from '@hooks';

import { error400Style } from '../styles';

export default function Error400Page() {
  const location = useLocation();

  useTitleHook('400 Bad Request');

  let message = 'Bad Request';
  if (location.state && location.state.message) {
    message = location.state.message;
  }

  return (
    <Box sx={error400Style.containerStyle}>
      <Typography variant="h1" sx={error400Style.codeStyle}>
        400
      </Typography>
      <Divider sx={error400Style.dividerStyle} />
      <Typography variant="h6" sx={error400Style.textStyle}>
        {message}
      </Typography>
    </Box>
  );
}
