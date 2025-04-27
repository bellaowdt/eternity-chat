"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import GeneralInformation from "./GeneralInformation";
import Memories from "./Memories";
import CommunicationStyle from "./CommunicationStyle";
import Appearance from "./Appearance";
import PersonalityTraits from "./PersonalityTraits";
import { Box } from "@mui/material";

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

  const StepComponent = steps[activeStep];

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent="center"
    >
      <MobileStepper
        variant="progress"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1, pt: 10 }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      <StepComponent />
    </Box>
  );
};

export default ProgressStepper;
