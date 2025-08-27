import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import NewTaskDialog from '@/components/NewTaskDialog/NewTaskDialog';
import { Task } from '@/types/Task';
import { ContainerBtnStyle } from './styles';

const QuickActions: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleSaveTask = (task: Task) => {
    console.log('Nueva tarea creada:', task);
  };

  return (
    <Box mb={2}>
      <Typography gutterBottom>Quick Actions</Typography>

      <ContainerBtnStyle>
        <Button
          variant='contained'
          color='primary'
          onClick={() => setOpen(true)}
        >
          + New Task
        </Button>
        <NewTaskDialog
          open={open}
          onClose={() => setOpen(false)}
          onSave={handleSaveTask}
        />

        <Button variant='contained' color='primary'>
          Filter
        </Button>
      </ContainerBtnStyle>
    </Box>
  );
};
export default QuickActions;
