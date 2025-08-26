import { Box, styled, Theme } from '@mui/material';
import { pxToRem } from '@/theme/utils/pxToRem';

export const ContainerStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backdropFilter: `blur(${pxToRem(16)})`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: `0 ${pxToRem(4)} ${pxToRem(6)} rgba(0, 0, 0, 0.1)`,
  gap: pxToRem(16),
  marginLeft: pxToRem(240),
  marginBottom: pxToRem(24),
  padding: pxToRem(16),
  textAlign: 'center',
  width: '80%',
  borderRadius: pxToRem(16),
}));

export const ContentManagerStyle = styled(Box)(
  ({ theme }: { theme: Theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: pxToRem(16),
  })
);

export const TypographyStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  fontWeight: 'bold',
}));
