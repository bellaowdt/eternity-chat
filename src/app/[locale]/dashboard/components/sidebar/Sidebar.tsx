import { DRAWER_MIN_WIDTH, DRAWER_WIDTH } from '@/constants/general';
import { Box, Drawer } from '@mui/material';
import { FC, useState } from 'react';
import LogoutDialog from '../accout/LogoutDialog';
import UserDetails from '../accout/UserDetails';
import SidebarMenus from './SidebarMenus';
import SignOutButton from '../accout/SignOutButton';

const drawerWidth = DRAWER_WIDTH;
const miniWidth = DRAWER_MIN_WIDTH;

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: FC<SidebarProps> = ({ collapsed }) => {
  const [logoutDialog, setLogoutDialog] = useState(false);

  const onToggleLogoutDialog = () => {
    setLogoutDialog((prevState) => !prevState);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? miniWidth : drawerWidth,
        flexShrink: 0,
        height: '100vh',
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
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        py={2}
      >
        <Box>
          <UserDetails collapsed={collapsed} />
          <SidebarMenus collapsed={collapsed} />
        </Box>
        <SignOutButton onClick={onToggleLogoutDialog} />
      </Box>
      <LogoutDialog open={logoutDialog} onClose={onToggleLogoutDialog} />
    </Drawer>
  );
};

export default Sidebar;
