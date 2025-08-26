import { Box, Button, Typography } from '@mui/material';
import { ContainerBtnStyle } from './styles';

const QuickActions: React.FC = () => {
  return (
    <Box mb={2}>
      <Typography gutterBottom>Quick Actions</Typography>

      <ContainerBtnStyle>
        <Button variant='contained' color='primary'>
          + New Task
        </Button>

        <Button variant='contained' color='primary'>
          Filter
        </Button>
      </ContainerBtnStyle>
    </Box>
  );
};
export default QuickActions;
