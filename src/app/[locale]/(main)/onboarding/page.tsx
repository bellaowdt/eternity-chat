'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { DEFAULT_SIGNIN_PATH } from '@/constants/routes';
import { useOnboardingSteps } from './hooks/useOnboardingSteps';
import { useAppContext } from '@/hooks/useAppContext';

const ReconnectSlider = () => {
  const theme = useTheme();
  const { isMobile } = useAppContext();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const steps = useOnboardingSteps();
  const [activeStep, setActiveStep] = useState(2);

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
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      px={isMobile ? 2 : isTablet ? 8 : 20}
      py={4}
    >
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="center"
        width="100%"
        gap={2}
      >
        {/* Left Side */}
        <Box
          flex={1.5}
          display="flex"
          flexDirection="column"
          height={{ xs: 'auto', md: '500px' }}
          width="100%"
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          {/* Dots */}
          <Box mb={2} display="flex" gap={1}>
            {steps?.map((_, index) => (
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
            textAlign={{ xs: 'center', md: 'left' }}
          >
            <Box maxWidth={560}>
              <Typography variant="h1" fontWeight="700" mb={2}>
                {steps[activeStep].title}
              </Typography>
            </Box>

            <Box maxWidth={469}>
              <Typography fontSize={18} color="text.secondary" mb={4}>
                {steps[activeStep].description}
              </Typography>
            </Box>
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
            <Typography
              onClick={handleSkip}
              variant="subtitle1"
              fontWeight={700}
              sx={{
                pointerEvents:
                  activeStep === steps.length - 1 ? 'none' : 'auto',
                cursor:
                  activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
                opacity: activeStep === steps.length - 1 ? 0.5 : 1,
                color: '#6C747F',
                minWidth: 0,
                padding: 0,
              }}
            >
              Skip
            </Typography>
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

              <Typography
                variant="subtitle1"
                fontWeight={700}
                color="primary.main"
              >
                Next
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Side */}
        <Box
          flex={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          {steps[activeStep].component}
        </Box>
      </Box>
    </Box>
  );
};

export default ReconnectSlider;
