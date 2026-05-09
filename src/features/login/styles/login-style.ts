import type { SxProps, Theme } from '@mui/material';

const containerStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const cardStyle: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 4,
  gap: 2,
  width: '400px',
  margin: '0 auto',
};

const alertStyle: SxProps<Theme> = {
  width: '400px',
  marginBottom: 2,
};

export const loginStyle = {
  container: containerStyle,
  card: cardStyle,
  alert: alertStyle,
};
