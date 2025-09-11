import { Box, styled, Theme } from '@mui/material';
import { pxToRem } from '@/theme/utils/pxToRem';

export const ContainerStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'block',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

export const ContentStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  backdropFilter: `blur(${pxToRem(16)})`,
  backgroundColor: theme.palette.background.default,
  padding: pxToRem(32),
  borderRadius: pxToRem(16),
  boxShadow: `0 ${pxToRem(4)} ${pxToRem(6)} rgba(0, 0, 0, 0.1)`,
  textAlign: 'center',
  width: '80%',
  color: theme.palette.text.primary,
  marginLeft: pxToRem(240),
  marginBottom: pxToRem(24),
}));
