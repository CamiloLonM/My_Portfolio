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
import { ContainerSidebarStyle } from './styles';

const Sidebar: React.FC = () => {
  const DrawerList = (
    <ContainerSidebarStyle aria-label='sidebar_component'>
      <Typography variant='h5'>Task Manager</Typography>
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
    </ContainerSidebarStyle>
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
