import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { FC, useState } from 'react';

interface MobileSidebarProps {
  toggleDrawer: VoidFunction;
  collapsed: boolean;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ collapsed, toggleDrawer }) => {
  const [active, setActive] = useState('Dashboard');

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Admin Requests', icon: <GroupIcon /> },
    { text: 'My Account', icon: <PersonIcon /> },
  ];

  return (
    <Drawer
      anchor="left"
      open={collapsed}
      onClose={toggleDrawer}
      sx={{
        '& .MuiDrawer-paper': {
          width: 240,
          borderRight: 'none',
          boxShadow: 'none',
          bgcolor: 'white',
        },
      }}
    >
      <Box sx={{ width: 240 }}>
        <List>
          {menuItems.map(({ text, icon }) => (
            <ListItem disablePadding key={text}>
              <ListItemButton
                onClick={() => {
                  setActive(text);
                  toggleDrawer();
                }}
                sx={{
                  bgcolor:
                    active === text ? 'rgba(0, 128, 0, 0.1)' : 'transparent',
                  borderLeft:
                    active === text
                      ? '4px solid green'
                      : '4px solid transparent',
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileSidebar;
