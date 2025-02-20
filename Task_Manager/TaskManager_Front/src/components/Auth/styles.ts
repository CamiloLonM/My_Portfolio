import { Box, Container, styled, Theme } from '@mui/material';

export const ContentStyle = styled(Container)(
  ({ theme }: { theme: Theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })
);
