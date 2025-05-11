'use client';

import { useAppContext } from '@/hooks/useAppContext';
import { Box, Container } from '@mui/material';
import { useState } from 'react';
import MobileSidebar from './components/sidebar/MobileSidebar';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/Topbar';
import ChatList from './components/chat/components/ChatList';
import ChatInput from './components/chat/components/ChatInput';
import ChatDrawer from './components/chat/components/ChatDrawer';

const Home = () => {
  const { isMobile } = useAppContext();
  const [collapsed, setCollapsed] = useState(false);
  const toggleDrawer = () => setCollapsed(!collapsed);
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      {isMobile ? (
        <MobileSidebar toggleDrawer={toggleDrawer} collapsed={collapsed} />
      ) : (
        <Sidebar collapsed={collapsed} />
      )}
      <Box
        flexGrow={1}
        sx={{
          overflow: 'hidden',
        }}
      >
        <Topbar collapsed={collapsed} toggleCollapsed={toggleDrawer} />
        <Box display="flex" height="100%" sx={{ position: 'relative' }}>
          <ChatDrawer />
          <Container
            maxWidth="md"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
              <ChatList />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={2}
              m={2}
            >
              <ChatInput />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
