'use client';

import { Navbar } from '@/components/Navbar';
import useResponsiveContainer from '@/hooks/useResponsiveContainer';
import { Container } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const containerMaxWidth = useResponsiveContainer('sm');
  return (
    <>
      <Navbar />
      <Container maxWidth={containerMaxWidth}>{children}</Container>
    </>
  );
};

export default Layout;
