'use client';

import { Navbar } from '@/components/Navbar';
import { Container } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};

export default Layout;
