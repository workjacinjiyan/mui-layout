import { createTheme } from '@mui/material/';

const theme = createTheme({
  palette: {
    primary: {
      main: '#824936',
    },
    secondary: {
      main: '#f3eed9',
    },
  },
  typography: {
    fontFamily: ['Playfair Display', 'Roboto', 'serif'].join(','),
    body1: {
      color: '#222c2a',
      lineHeight: 1.6,
      minHeight: '100vh',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          font-size: clamp(28px, 3vw, 32px);
          margin-top: 0;
        },
        h2 {
          font-size: clamp(20px, 2.25vw, 24px);
          margin-top: 0;
        },
        p {
          font-size: clamp(14px, 1.5vw, 16px);
        },
        img {
          width: 100%;
        }
      `,
    },
    MuiContainer: {
      styleOverrides: `
      div {
        padding-right: 2em;
        padding-left: 2em;
      }
      `,
    },
  },
});

export default theme;
