'use client';

import { Navbar } from '@/components/Navbar';
import useResponsiveContainer from '@/hooks/useResponsiveContainer';
import { Container } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const containerMaxWidth = useResponsiveContainer('sm');
  return (
    <>
      <Navbar />
      <Container maxWidth={containerMaxWidth}>{children}</Container>
    </>
  );
};

export default Layout;
