'use client';

import ChatExperience from './components/ChatExperience';
import ChooseUs from './components/ChooseUs';
import { Container } from '@mui/material';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import useResponsiveContainer from '@/hooks/useResponsiveContainer';
import { DEFAULT_ONBOARDING_PATH } from '@/constants/routes';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.push(DEFAULT_ONBOARDING_PATH);
  const containerMaxWidth = useResponsiveContainer();
  return (
    <>
      {/* <Navbar />
      <Header />
      <Container maxWidth={containerMaxWidth}>
        <ChatExperience />
        <ChooseUs />
      </Container> */}
    </>
  );
}
