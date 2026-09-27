import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { Link } from '@tanstack/react-router';

const containerStyle = { padding: 4, textAlign: 'center' } as const;

/** Landing spot for links to pages that the host or another remote provides. */
export default function StandalonePlaceholderComponent({ path }: { path: string }) {
  return (
    <Box sx={containerStyle}>
      <Typography>{path} is provided by the host app.</Typography>
      <MuiLink component={Link} to="/">
        Back
      </MuiLink>
    </Box>
  );
}
