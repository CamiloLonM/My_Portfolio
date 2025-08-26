import * as React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  ListItemButton,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar: React.FC = () => {
  const DrawerList = (
    <Box>
      <Typography variant='h6' component='div'>
        Task Manager
      </Typography>
      <Divider />

      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary='Tasks' />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary='Projects' />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer variant='permanent' anchor='left'>
        {DrawerList}
      </Drawer>
    </div>
  );
};
export default Sidebar;
