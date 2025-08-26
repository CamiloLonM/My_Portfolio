import { Box, Paper, Typography, Chip } from '@mui/material';

const RecentTasks: React.FC = () => {
  const tasks = [
    { name: 'Update website', priority: 'High', status: 'In Progress' },
    { name: 'Email client', priority: 'Medium', status: 'Pending' },
    { name: 'Prepare presentation', priority: 'Low', status: 'Completed' },
    {
      name: 'Design new logo',
      priority: 'Medium',
      status: 'Pending',
      date: 'Jan 25',
    },
  ];

  const colorMap = { High: 'error', Medium: 'warning', Low: 'success' };

  return (
    <div>
      <Box>
        {tasks.map((task) => (
          <Paper
            key={task.name}
            sx={{
              p: 2,
              mb: 1,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography>{task.name}</Typography>
              {task.date && (
                <Typography variant='caption'>{task.date}</Typography>
              )}
            </Box>
            <Box display='flex' gap={1}>
              <Chip
                label={task.priority}
                color={colorMap[task.priority]}
                size='small'
              />
              <Chip label={task.status} variant='outlined' size='small' />
            </Box>
          </Paper>
        ))}
      </Box>
    </div>
  );
};

export default RecentTasks;
