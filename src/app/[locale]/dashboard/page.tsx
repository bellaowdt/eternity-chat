'use client';

import { useAppContext } from '@/hooks/useAppContext';
import { Box, Container, Stack } from '@mui/material';
import { useState } from 'react';
import ChatDrawer from './components/chat/components/ChatDrawer';
import ChatInput from './components/chat/components/ChatInput';
import MessagesContainer from './components/chat/components/MessagesContainer';
import MobileSidebar from './components/sidebar/MobileSidebar';
import Sidebar from './components/sidebar/Sidebar';
import TopBar from './components/TopBar';

export const GET_CHAT_HISTORY_KEY = 'GET_USER_CHAT_HISTORY';
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

      <Stack height="100%" width="100%" minHeight={0} flex={1}>
        <TopBar collapsed={collapsed} toggleCollapsed={toggleDrawer} />

        <Box display="flex" flex={1} minHeight={0} position="relative">
          <ChatDrawer />

          <Container
            maxWidth="md"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              minHeight: 0,
            }}
          >
            <MessagesContainer />

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
      </Stack>
    </Box>
  );
};

export default Home;
