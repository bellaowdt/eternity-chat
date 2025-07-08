import { DRAWER_WIDTH } from '@/constants/general';
import { Box, Drawer } from '@mui/material';
import { FC } from 'react';
import SignOutButton from '../accout/SignOutButton';
import UserDetails from '../accout/UserDetails';
import SidebarMenus from './SidebarMenus';

interface MobileSidebarProps {
  toggleDrawer: VoidFunction;
  collapsed: boolean;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ collapsed, toggleDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={collapsed}
      onClose={toggleDrawer}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        height: '100vh',
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          transition: 'width 0.3s',
          boxShadow: 2,
          bgcolor: 'white',
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
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
        width="100%"
      >
        <Box width="100%">
          <UserDetails collapsed={collapsed} />
          <SidebarMenus collapsed={!collapsed} />
        </Box>
        <SignOutButton />
      </Box>
    </Drawer>
  );
};

export default MobileSidebar;
