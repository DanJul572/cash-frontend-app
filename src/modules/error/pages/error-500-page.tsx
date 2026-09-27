import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTitleHook } from '@zapplib/core';

import { error500Style } from '../styles';
import type { Error500PagePropsType } from '../types';

export default function Error500Page({
  message = 'Internal Server Error',
  errors = [],
}: Error500PagePropsType) {
  useTitleHook('500 Internal Server Error');

  return (
    <Box sx={error500Style.containerStyle}>
      <Typography variant="h1" sx={error500Style.codeStyle}>
        500
      </Typography>
      <Divider sx={error500Style.dividerStyle} />
      <Typography variant="h6" sx={error500Style.textStyle}>
        {message}
      </Typography>
      {errors.length > 0 && (
        <Box component="ul" sx={error500Style.errorListStyle}>
          {errors.map((error) => (
            <Typography key={error} component="li" variant="body2">
              {error}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
}
