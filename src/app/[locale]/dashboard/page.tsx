'use client';

import { useAppContext } from '@/hooks/useAppContext';
import { Box, Container } from '@mui/material';
import { useState } from 'react';
import MobileSidebar from './components/MobileSidebar';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ChatList from './components/chat/components/ChatList';
import ChatInput from './components/chat/components/ChatInput';
// import SettingDialog from './components/setting/Setting';

const Home = () => {
  const { isMobile } = useAppContext();
  const [collapsed, setCollapsed] = useState(false);
  const toggleDrawer = () => setCollapsed(!collapsed);
  // const [settingDialog, setSettingDialog] = useState(true);

  // const onToggleSettingtDialog = () => {
  //   setSettingDialog((prevState) => !prevState);
  // };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        overflow: 'scroll',
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      {isMobile ? (
        <MobileSidebar toggleDrawer={toggleDrawer} collapsed={collapsed} />
      ) : (
        <Sidebar collapsed={collapsed} />
      )}
      <Box flexGrow={1} px={{ xs: 2, sm: 3 }} mx={{ xs: 1, sm: 0 }}>
        <Topbar collapsed={collapsed} toggleCollapsed={toggleDrawer} />
        <Container maxWidth="md">
          <ChatList />
          {/* <SettingDialog
            open={settingDialog}
            onClose={onToggleSettingtDialog}
          /> */}
          <ChatInput />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
