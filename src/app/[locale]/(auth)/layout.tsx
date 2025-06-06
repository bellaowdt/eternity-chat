'use client';

import useResponsiveContainer from '@/hooks/useResponsiveContainer';
import { Box, Container } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const containerMaxWidth = useResponsiveContainer('sm');
  //TODO: Add a background image or gradient if needed
  return (
    <Box bgcolor="#E0F0FF">
      <Container maxWidth={containerMaxWidth}>{children}</Container>;
    </Box>
  );
};

export default Layout;
