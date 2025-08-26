import { Box, Paper, Typography } from '@mui/material';
import ChartPie from '../ChartsPie/ChartsPie';
import { ContainerStyle, ContentManagerStyle, TypographyStyle } from './styles';

const TaskSummary: React.FC = () => {
  const tasks = [
    { label: 'Pending', count: 5 },
    { label: 'In Progress', count: 3 },
    { label: 'Completed', count: 12 },
  ];

  return (
    <ContainerStyle>
      <TypographyStyle>Task Summary</TypographyStyle>
      <ContentManagerStyle id='task_summary'>
        {tasks.map((task) => (
          <Paper key={task.label} sx={{ p: 2, flex: 1, textAlign: 'center' }}>
            <Typography>{task.count}</Typography>
            <Typography>{task.label}</Typography>
          </Paper>
        ))}
        <ChartPie tasks={tasks} />
      </ContentManagerStyle>
    </ContainerStyle>
  );
};

export default TaskSummary;
