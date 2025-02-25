import { createTheme } from '@mui/material/styles';
import { pxToRem } from './utils/pxToRem';

const customColors = {
  primary: '#1976d2',
  secondary: '#dc004e',
  background: '#f5f5f5',
  textPrimary: '#333333',
  textSecondary: '#757575',
};

const typography = {
  fontFamily: 'Arial, sans-serif',
  h1: {
    fontSize: pxToRem(40),
    fontWeight: 700,
    color: customColors.textPrimary,
  },
  h2: {
    fontSize: pxToRem(32),
    fontWeight: 600,
    color: customColors.textPrimary,
  },
  body1: {
    fontSize: pxToRem(16),
    color: customColors.textPrimary,
  },
  body2: {
    fontSize: pxToRem(14),
    color: customColors.textSecondary,
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: customColors.primary,
    },
    secondary: {
      main: customColors.secondary,
    },
    background: {
      default: customColors.background,
      paper: '#ffffff',
    },
    text: {
      primary: customColors.textPrimary,
      secondary: customColors.textSecondary,
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ffa000',
    },
  },
  typography,
});

export default theme;
