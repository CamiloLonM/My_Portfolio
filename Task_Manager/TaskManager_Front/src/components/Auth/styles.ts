import { Box, styled, Theme, Typography } from '@mui/material';
import { pxToRem } from '@/theme/utils/pxToRem';

export const ContainerStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
}));

export const TitleStyle = styled(Typography)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: pxToRem(16),
}));

export const ContentStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  backdropFilter: `blur(${pxToRem(16)})`,
  padding: pxToRem(32),
  borderRadius: pxToRem(16),
  boxShadow: `0 ${pxToRem(4)} ${pxToRem(6)} rgba(0, 0, 0, 0.1)`,
  textAlign: 'center',
  width: '100%',
  maxWidth: pxToRem(400),
  color: theme.palette.text.primary,
}));
