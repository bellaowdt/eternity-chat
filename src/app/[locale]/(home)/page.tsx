'use client';

import ChatExperience from './components/ChatExperience';
import ChooseUs from './components/ChooseUs';
import { Container } from '@mui/material';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import useResponsiveContainer from '@/hooks/useResponsiveContainer';
import { useTranslations } from 'next-intl';

export default function Home() {
  const containerMaxWidth = useResponsiveContainer();
  const t = useTranslations();
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
