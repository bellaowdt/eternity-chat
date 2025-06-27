'use client';

import React from 'react';
import { Container } from '@mui/material';
import ProgressStepper from '../components/Stepper';
import useResponsiveContainer from '@/hooks/useResponsiveContainer';

const OnboardingProcess = () => {
  const containerMaxWidth = useResponsiveContainer();

  return (
    // <Container maxWidth={containerMaxWidth}>
    <ProgressStepper />
    // </Container>
  );
};

export default OnboardingProcess;
