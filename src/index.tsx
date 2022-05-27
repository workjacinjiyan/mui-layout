import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';

import SuspenseFallback from './SuspenseFallback';
import App from './App';
import { Suspense } from 'react';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Suspense fallback={<SuspenseFallback />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Suspense>
  </StrictMode>
);
