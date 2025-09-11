import { Box, styled, Theme } from '@mui/material';
import { pxToRem } from '@/theme/utils/pxToRem';

export const ContainerSidebarStyle = styled(Box)(
  ({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#1E293B',
    height: '100%',
    paddingTop: pxToRem(16),
  })
);
