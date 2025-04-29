import React, { FC } from "react";
import Button from "@mui/material/Button";

interface SkipStepProps {
  onSkip: VoidFunction;
}

const SkipStep: FC<SkipStepProps> = ({ onSkip }) => {
  return (
    <Button variant="text" onClick={onSkip} sx={{ mt: 2 }}>
      Skip for Now
    </Button>
  );
};

export default SkipStep;
