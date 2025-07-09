'use client';

import { Navbar } from '@/components/Navbar';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      {children}
    </>
  );
};

export default Layout;
