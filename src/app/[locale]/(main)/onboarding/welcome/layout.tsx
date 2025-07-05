'use client';

import { LAYOUT_BACKGROUND_BLUE } from '@/constants/general';
import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Box bgcolor={LAYOUT_BACKGROUND_BLUE}>{children}</Box>;
};

export default Layout;
