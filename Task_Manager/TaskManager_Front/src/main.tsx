import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { GlobalStyles } from './theme/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
