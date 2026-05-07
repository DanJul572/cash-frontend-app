import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { cardStyle, containerStyle } from '../styles';

export default function LoginPage() {
  return (
    <Box sx={containerStyle}>
      <Card sx={cardStyle}>
        <Typography variant="h5" component="h2" gutterBottom>
          Login
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
        />
        <Button variant="outlined" fullWidth>
          Login
        </Button>
      </Card>
    </Box>
  );
}
