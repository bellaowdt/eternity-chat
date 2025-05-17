'use client';

import { useState } from 'react';
import { Box, Button, Typography, Link, Container } from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';
import { DEFAULT_SIGNIN_PATH } from '@/constants/routes';

const steps = [
  {
    title: 'Reconnect Beyond Time',
    description:
      'Discover a compassionate way to relive memories and share heartfelt moments with your loved ones through advanced AI simulation.',
    image: '',
  },
  {
    title: 'AI-Driven Conversations',
    description:
      'Eternity Chat uses cutting-edge AI to simulate meaningful interactions. Recreate cherished memories and keep the bond alive.',
    image: '',
  },
  {
    title: 'Designed for Healing',
    description:
      'Eternity Chat is crafted with care to support your emotional journey. Connect in a way that soothes and uplifts your spirit.',
    image: '',
  },
];

export default function ReconnectSlider() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      // Example: router.push('/dashboard')
    }
  };

  const handleSkip = () => {
    setActiveStep(steps.length - 1);
  };

  const handleDotClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        px={2}
        py={4}
      >
        <Box
          display="flex"
          flexDirection={{ xs: 'column-reverse', sm: 'row' }}
          alignItems="center"
          justifyContent="center"
          width="100%"
          gap={6}
        >
          {/* Left Side */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            height={{ xs: 'auto', md: '500px' }}
            width="100%"
            justifyContent="space-between"
            alignItems={{ xs: 'center', md: 'flex-start' }}
          >
            {/* Dots */}
            <Box mb={2} display="flex" gap={1}>
              {steps.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: index === activeStep ? 'primary.main' : 'grey.400',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: index === activeStep ? 'scale(1.4)' : 'scale(1)',
                  }}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </Box>

            {/* Title and Description */}
            <Box
              display="flex"
              flexDirection="column"
              flexGrow={1}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              maxWidth={400}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              <Typography variant="h4" fontWeight="bold" mb={2}>
                {steps[activeStep].title}
              </Typography>

              <Typography variant="body1" color="text.secondary" mb={4}>
                {steps[activeStep].description}
              </Typography>
            </Box>

            {/* Bottom Actions */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
              width="100%"
              maxWidth={400}
              mt={{ xs: 4, md: 0 }}
            >
              <Box display="flex" alignItems="center" gap={1}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    padding: 0,
                    minWidth: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <KeyboardArrowRight />
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Link href={DEFAULT_SIGNIN_PATH}>Let&apos;s Begin</Link>
                ) : (
                  <Typography variant="body1">Next</Typography>
                )}
              </Box>

              <Link
                component="button"
                underline="hover"
                color="text.secondary"
                onClick={handleSkip}
                disabled={activeStep === steps.length - 1}
                sx={{
                  opacity: activeStep === steps.length - 1 ? 0.5 : 1,
                  pointerEvents:
                    activeStep === steps.length - 1 ? 'none' : 'auto',
                  cursor:
                    activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
                }}
              >
                Skip
              </Link>
            </Box>
          </Box>

          {/* Right Side */}
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Box
              width="100%"
              maxWidth="400px"
              height={{ xs: '300px', md: '500px' }}
              bgcolor="#e0e0e0"
              borderRadius={2}
              position="relative"
              overflow="hidden"
            >
              <Image
                src={steps[activeStep].image}
                alt="Onboarding Step"
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
