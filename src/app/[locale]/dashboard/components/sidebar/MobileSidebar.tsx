import { DRAWER_WIDTH } from '@/constants/general';
import ContactsIcon from '@mui/icons-material/Contacts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  useTheme,
} from '@mui/material';
import { FC, useState } from 'react';

interface MobileSidebarProps {
  toggleDrawer: VoidFunction;
  collapsed: boolean;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ collapsed, toggleDrawer }) => {
  const [active, setActive] = useState('Dashboard');
  const theme = useTheme();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Inbox', icon: <MailIcon /> },
    { text: 'Contacts', icon: <ContactsIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <Drawer
      anchor="left"
      open={collapsed}
      onClose={toggleDrawer}
      sx={{
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          borderRight: 'none',
          boxShadow: 'none',
          bgcolor: 'white',
        },
      }}
    >
      <Box sx={{ width: DRAWER_WIDTH }}>
        <List>
          {menuItems?.map(({ text, icon }) => (
            <ListItem disablePadding key={text}>
              <ListItemButton
                onClick={() => {
                  setActive(text);
                  toggleDrawer();
                }}
                sx={{
                  color: active === text ? 'common.white' : 'common.black',
                  bgcolor:
                    active === text
                      ? theme.palette.primary.main
                      : 'transparent',
                  borderLeft:
                    active === text
                      ? `4px solid ${theme.palette.primary.light}`
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
