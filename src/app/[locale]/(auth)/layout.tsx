"use client";

import { Container } from "@mui/material";
import { FC, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Container maxWidth="sm">{children}</Container>
    </>
  );
};

export default Layout;
