import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.5,
        backgroundColor: '#f5f5f5',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
    }}
  />
);
