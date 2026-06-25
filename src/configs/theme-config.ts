import { createTheme } from '@mui/material/styles';

export const themeConfig = createTheme({
    palette: {
        mode: 'dark',
        // primary: {
        //     main: '#E64A19',
        //     dark: '#BF360C',
        //     light: '#FF6D00',
        // },
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
