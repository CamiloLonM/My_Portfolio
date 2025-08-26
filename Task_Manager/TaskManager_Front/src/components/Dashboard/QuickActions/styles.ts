import { pxToRem } from '@/theme/utils/pxToRem';
import { Box, styled, Theme } from '@mui/material';

export const ContainerBtnStyle = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
