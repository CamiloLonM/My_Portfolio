import { Box, Typography } from '@mui/material';
import BadgeAvatars from '@/components/Dashboard/BadgeAvatars/BadgeAvatars';

const DashboardHeader: React.FC = () => {
  return (
    <div id='dashboard_header' data-testid='dashboard_header'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography>Dashboard</Typography>
        <BadgeAvatars />
        <Typography>Nombre</Typography>
      </Box>
    </div>
  );
};

export default DashboardHeader;
