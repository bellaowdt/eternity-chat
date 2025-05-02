import Logo from '@/components/common/Logo';
import { DRAWER_MIN_WIDTH, DRAWER_WIDTH } from '@/constants/general';
import { DEFAULT_HOME_PAGE_PATH } from '@/constants/routes';
import ContactsIcon from '@mui/icons-material/Contacts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { FC } from 'react';

const drawerWidth = DRAWER_WIDTH;
const miniWidth = DRAWER_MIN_WIDTH;

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: FC<SidebarProps> = ({ collapsed }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? miniWidth : drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: collapsed ? miniWidth : drawerWidth,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
          borderRight: 'none',
          boxShadow: 'none',
          bgcolor: (theme) => theme.palette.background.paper,
        },
      }}
    >
      <Box sx={{ p: 2, height: '100%' }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          my={3}
        >
          <Link href={DEFAULT_HOME_PAGE_PATH}>
            <Logo />
          </Link>
          <Typography variant="subtitle1" color="text.primary">
            Eternity Chat
          </Typography>
        </Box>
        {/* <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <Avatar sx={{ width: 56, height: 56, mb: 1 }} />
          {!collapsed && (
            <>
              <Typography variant="subtitle1">Bahar Keshavarz</Typography>
              <Typography variant="caption">
                bahar.keshavarzc@gmail.com
              </Typography>
            </>
          )}
        </Box> */}
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardIcon /> },
            { text: 'Inbox', icon: <MailIcon /> },
            { text: 'Contacts', icon: <ContactsIcon /> },
            { text: 'Settings', icon: <SettingsIcon /> },
          ].map(({ text, icon }) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  px: collapsed ? 1 : 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: collapsed ? 0 : 2,
                    justifyContent: 'center',
                  }}
                >
                  {icon}
                </ListItemIcon>
                {!collapsed && <ListItemText primary={text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
