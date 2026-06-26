import { createTheme } from '@mui/material/styles';

export const themeConfig = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#26A69A',
            dark: '#00796B',
            light: '#80CBC4',
        },
        secondary: {
            main: '#FF5722',
            dark: '#E64A19',
            light: '#FF8A65',
        },
        background: {
            default: '#0A1628',
            paper: '#102035',
        },
        text: {
            primary: '#ECEFF1',
            secondary: '#90A4AE',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: (theme) => ({
                '*': {
                    scrollbarWidth: 'thin',
                    scrollbarColor: `${theme.palette.grey[400]} transparent`,
                },
                '*::-webkit-scrollbar': {
                    width: '4px',
                    height: '4px',
                },
                '*::-webkit-scrollbar-track': {
                    background: 'transparent',
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.grey[400],
                    borderRadius: '999px',
                },
                '*::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: theme.palette.grey[600],
                },
            }),
        },
    },
});
