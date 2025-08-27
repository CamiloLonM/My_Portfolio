import { Box, styled, Theme } from '@mui/material';
import { pxToRem } from '@/theme/utils/pxToRem';

export const ContentTaskStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignContent: 'center',
  flexDirection: 'column',
  gap: pxToRem(24),
  marginTop: pxToRem(16),
  padding: pxToRem(24),
}));

export const BoxTaskStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: pxToRem(16),
}));

export const DialogTaskStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  padding: theme.spacing(2, 3),
  gap: pxToRem(12),
  justifyContent: 'flex-end',
}));
