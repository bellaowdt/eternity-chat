"use client";

import ChatExperience from "./components/ChatExperience";
import ChooseUs from "./components/ChooseUs";
import { Container } from "@mui/material";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import useResponsiveContainer from "@/hooks/useResponsiveContainer";

export default function Home() {
  const containerMaxWidth = useResponsiveContainer();
  return (
    <>
      <Navbar />
      <Header />
      <Container maxWidth={containerMaxWidth}>
        <ChatExperience />
        <ChooseUs />
      </Container>
    </>
  );
}
