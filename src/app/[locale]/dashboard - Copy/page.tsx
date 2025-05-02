'use client';

import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

export default function Home() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f3f3f3' }}>
      {/* TODO: change color */}
      <Topbar toggleCollapsed={toggleCollapsed} />
      <Sidebar collapsed={collapsed} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          transition: 'margin-left 0.3s',
        }}
      >
        <Container>
          <Typography variant="h6">Bahari</Typography>
          <Typography variant="caption">Default Workspace</Typography>
        </Container>
      </Box>
    </Box>
  );
}
