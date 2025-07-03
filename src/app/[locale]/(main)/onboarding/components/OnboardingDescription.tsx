import {
  DEFAULT_MAX_WIDTH_469,
  DEFAULT_MAX_WIDTH_591,
  STEPPER_COLOR,
} from '@/constants/general';
import { DEFAULT_SIGNIN_PATH } from '@/constants/routes';
import { useAppContext } from '@/hooks/useAppContext';
import { KeyboardArrowRight } from '@mui/icons-material';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Dispatch, FC, SetStateAction } from 'react';
import { useOnboardingSteps } from '../hooks/useOnboardingSteps';

type OnboardingDescriptionProps = {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
};

const OnboardingDescription: FC<OnboardingDescriptionProps> = ({
  activeStep,
  setActiveStep,
}) => {
  const router = useRouter();
  const theme = useTheme();
  const { isMobile } = useAppContext();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const steps = useOnboardingSteps();
  const locale = useLocale();

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      router.push(DEFAULT_SIGNIN_PATH);
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
      flexDirection="column"
      flex={1}
      justifyContent="space-between"
      alignItems={{ xs: 'center', md: 'flex-start' }}
      px={isMobile ? 2 : isTablet ? 12 : 16}
    >
      <Box my={{ xs: 8, sm: 8, md: 12 }}>
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
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box mt={16}>
            <Box maxWidth={DEFAULT_MAX_WIDTH_591}>
              <Typography variant="h1" fontWeight="700" mb={2}>
                {steps[activeStep].title}
              </Typography>
            </Box>

            <Box maxWidth={DEFAULT_MAX_WIDTH_469}>
              <Typography
                fontSize={18}
                color="text.secondary"
                mb={4}
                className={`latoStyle-${locale}`}
              >
                {steps[activeStep].description}
              </Typography>
            </Box>
          </Box>
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
            pointerEvents: activeStep === steps.length - 1 ? 'none' : 'auto',
            cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
            opacity: activeStep === steps.length - 1 ? 0.5 : 1,
            color: STEPPER_COLOR,
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

          <Typography variant="subtitle1" fontWeight={700} color="primary.main">
            Next
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingDescription;
