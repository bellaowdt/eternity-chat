import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { STEPPER_COLOR } from '@/constants/general';

interface SkipStepProps {
  onSkip: VoidFunction;
}

const SkipStep: FC<SkipStepProps> = ({ onSkip }) => {
  return (
    <Button
      variant="text"
      onClick={onSkip}
      sx={{
        cursor: 'pointer',
        color: STEPPER_COLOR,
        minWidth: 0,
        padding: 0,
        mt: 2,
        fontSize: 'subtitle1',
        fontWeight: 700,
      }}
    >
      Skip
    </Button>
  );
};

export default SkipStep;
