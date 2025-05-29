'use client';

import { Navbar } from '@/components/Navbar';
import { Container } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default Layout;
