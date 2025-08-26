import { Box, Container } from '@mui/material';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import TaskSummary from './TaskSummary/TaskSummary';
import QuickActions from './QuickActions/QuickActions';
import RecentTasks from './RecentTasks/RecentTasks';
import { ContainerStyle, ContentStyle } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container id='dashboard'>
      <Box id='dashboard_container'>
        <DashboardHeader />
        <TaskSummary />
      </Box>
      <ContentStyle>
        <QuickActions />
        <RecentTasks />
      </ContentStyle>
    </Container>
  );
};

export default Dashboard;
