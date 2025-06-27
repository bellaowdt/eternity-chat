'use client';

import { STEPPER_COLOR } from '@/constants/general';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Appearance from './Appearance';
import CommunicationStyle from './CommunicationStyle';
import GeneralInformation from './GeneralInformation';
import Memories from './Memories';
import PersonalityTraits from './PersonalityTraits';

const steps = [
  GeneralInformation,
  PersonalityTraits,
  Appearance,
  CommunicationStyle,
  Memories,
];

const ProgressStepper = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const StepComponent = steps[activeStep];

  const handleDotClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <Box
      display="flex"
      width="100%"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      px={4}
    >
      {/* Dots */}
      <Box
        width="100%"
        alignItems="center"
        justifyContent="center"
        mt={6}
        display="flex"
        gap={1}
      >
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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth="customSize"
        width="100%"
        justifyContent="center"
        my={4}
        flex={1}
      >
        <MobileStepper
          variant="progress"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          sx={{
            width: '100%',
            pt: 4,
            justifyContent: 'space-between',
          }}
          nextButton={<HelpOutlineIcon />}
          backButton={
            <Button onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              <Typography
                variant="subtitle1"
                sx={{
                  color: STEPPER_COLOR,
                }}
              >
                Back
              </Typography>
            </Button>
          }
        />
        <StepComponent onSkip={handleSkip} />
      </Box>
    </Box>
  );
};

export default ProgressStepper;
