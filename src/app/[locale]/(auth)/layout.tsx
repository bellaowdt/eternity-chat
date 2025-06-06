'use client';

import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  //TODO: Add a background image or gradient if needed
  return (
    <Box p={2} bgcolor="#E0F0FF">
      {children}
    </Box>
  );
};

export default Layout;
