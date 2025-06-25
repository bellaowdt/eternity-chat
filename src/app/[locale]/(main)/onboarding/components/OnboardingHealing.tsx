'use client';

import {
  ONBOARDING_BG_COLOR,
  ONBOARDING_GRID_IMAGES,
} from '@/constants/general';
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const OnboardingHealing = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 0 },
      }}
    >
      {/* Right-side image */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: '5%', md: 0 },
          width: { xs: 240, sm: 300, md: 430 },
          height: { xs: 240, sm: 300, md: 536 },
          bgcolor: ONBOARDING_BG_COLOR,
          borderRadius: 0.5,
        }}
      >
        <Image
          src={`${ONBOARDING_GRID_IMAGES}/chris.png`}
          alt="Chris"
          fill
          style={{
            objectFit: 'cover',
            borderRadius: 0.5,
          }}
          priority
        />
      </Box>

      {/* Floating chat box */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '60%', sm: '65%', md: '60%' },
          left: { xs: '5%', sm: '10%', md: '15%' },
          maxWidth: { xs: 280, sm: 320, md: 400 },
          bgcolor: 'common.white',
          borderRadius: 0.5,
          boxShadow: 4,
          px: { xs: 1.5, sm: 2 },
        }}
      >
        <Stack p={{ xs: 2, sm: 3 }} spacing={2}>
          {/* Header */}
          <Box display="flex" alignItems="center">
            <Avatar
              alt="Joe Collins"
              src={`${ONBOARDING_GRID_IMAGES}/chris.png`}
              sx={{
                width: { xs: 48, sm: 60 },
                height: { xs: 48, sm: 60 },
                bgcolor: ONBOARDING_BG_COLOR,
              }}
            />
            <Box pl={2}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                fontSize={{ xs: 12, sm: 14 }}
              >
                Father
              </Typography>
              <Typography
                fontWeight={900}
                color="text.primary"
                fontSize={{ xs: 16, sm: 18 }}
              >
                Joe Collins
              </Typography>
            </Box>
          </Box>

          {/* Message */}
          <Typography fontSize={{ xs: 14, sm: 16, md: 18 }} fontWeight={400}>
            Hey John, let’s talk about how you’ve been lately.
          </Typography>

          {/* Call-to-action */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: '#A2CBF3',
              '&:hover': { bgcolor: '#8dbfe7' },
              textTransform: 'none',
              py: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={700}
              color="common.black"
              fontSize={{ xs: 14, sm: 16 }}
            >
              Start Chat
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default OnboardingHealing;
