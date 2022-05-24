import { createTheme } from '@mui/material/';

const theme = createTheme({
  palette: {
    primary: {
      main: '#136c72',
    },
    secondary: {
      main: '#23424a',
    },
    info: {
      main: '#38cfd9',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'serif'].join(','),
    body1: {
      color: '#222c2a',
      lineHeight: 1.6,
      fontSize: '1.3125rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          min-height: 100vh;
        },
        h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-top: 0;
        },
        h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-top: 0;
        },
        p {
          font-size: clamp(1rem, 1.5vw, 1.3125rem);
        },
        img {
          max-width: 100%;
        },
        ul {
          list-style: none;
          padding-left: 0;
          margin: 0
        },
        li {
          font-size: clamp(1rem, 1.5vw, 1.3125rem);
        },
        a {
          color: #fff!important
        }
      `,
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

export default theme;
