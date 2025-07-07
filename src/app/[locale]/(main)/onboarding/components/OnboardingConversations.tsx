'use client';

import {
  GREY_COLOR,
  ONBOARDING_BG_COLOR,
  ONBOARDING_GRID_IMAGES,
} from '@/constants/general';
import { ChatCardDirectionEnum } from '@/services/chat/types';
import { PlayArrow } from '@mui/icons-material';
import {
  alpha,
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import MessageBubble from './MessageBubble';
import { common } from '@mui/material/colors';
import { useAppContext } from '@/hooks/useAppContext';

const OnboardingConversations = () => {
  const theme = useTheme();
  const { isMobile } = useAppContext();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: { xs: 600, sm: 700, md: 800 },
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 1, sm: 2, md: 2 },
        py: { xs: 3, sm: 4, md: 4 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Joe message bubble */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '5%', sm: '10%', md: '16%', lg: '10%' },
          left: { xs: '4%', sm: '5%', md: '6%', lg: '6%' },
          maxWidth: { xs: '70%', sm: '65%', md: '60%' },
          zIndex: 1,
        }}
      >
        <MessageBubble
          time="2025-05-05 15:41:00"
          bubbleColor={'secondary.light'}
          bubbleTimeColor={GREY_COLOR}
          bubbleTextColor={common.white}
          tailPosition={ChatCardDirectionEnum.RIGHT}
          bubblePadding={isMobile ? 1.5 : 2}
        >
          <Typography
            variant={isXs ? 'body1' : 'h6'}
            sx={{ color: GREY_COLOR, lineHeight: 1.3 }}
          >
            I’m here with you. Let’s talk about anything you like.
          </Typography>
        </MessageBubble>
      </Box>

      {/* Joe second message + label */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '23%', sm: '26%', md: '29%', lg: '29%' },
          left: { xs: '4%', sm: '5%', md: '1%', lg: '1%' },
          maxWidth: { xs: '70%', sm: '65%', md: '60%' },
          zIndex: 1,
        }}
      >
        <MessageBubble
          time="2025-05-05 15:42:00"
          bubbleColor="#8E8E8E"
          bubbleTextColor={common.white}
          tailPosition={ChatCardDirectionEnum.LEFT}
          bubbleTimeColor={alpha(common.white, 0.6)}
          bubblePadding={isMobile ? 1.5 : 2}
        >
          <Typography
            variant={isXs ? 'body1' : 'h6'}
            sx={{ color: common.white, lineHeight: 1.3 }}
          >
            I’m here with you. Let’s talk about anything you like.
          </Typography>
        </MessageBubble>

        <Stack direction="row" alignItems="center" spacing={1} mt={1}>
          <Avatar
            alt="Joe"
            src={`${ONBOARDING_GRID_IMAGES}/chris.png`}
            sx={{
              width: { xs: 36, sm: 40, md: 45 },
              height: { xs: 36, sm: 40, md: 45 },
              bgcolor: ONBOARDING_BG_COLOR,
            }}
          />
          <Typography fontSize={{ xs: 10, sm: 11, md: 12 }}>Joe</Typography>
        </Stack>
      </Box>

      {/* Center image */}
      <Box
        sx={{
          width: { xs: 280, sm: 420, md: 430 },
          height: { xs: 350, sm: 420, md: 536 },
          [theme.breakpoints.between(500, 768)]: {
            width: 400,
            height: 450,
          },
          position: 'absolute',
          top: { xs: '20%', sm: '20%', md: '20%' },
          left: { xs: '18%', sm: '20%', md: '22%' },
          borderRadius: 1,
          backgroundColor: ONBOARDING_BG_COLOR,
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        <Image
          src={`${ONBOARDING_GRID_IMAGES}/shily.png`}
          alt="Center"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>

      {/* You (voice message + label) */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '70%', sm: '70%', md: '77%', xl: '78%' },
          right: { xs: '3%', sm: '10%', md: '1%', xl: '10%' },
          [theme.breakpoints.between(600, 768)]: {
            right: '35%',
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
        >
          <Box width="fit-content" display="flex" justifyContent="flex-end">
            <MessageBubble
              time="2025-05-05 15:41:00"
              bubbleColor={'secondary.light'}
              bubbleTextColor={common.black}
              tailPosition={ChatCardDirectionEnum.RIGHT}
              bubbleTimeColor={GREY_COLOR}
              bubblePadding={1}
              timerPadding={0}
            >
              <Box
                display="flex"
                alignItems="center"
                width="100%"
                minWidth={{ xs: 160, sm: 200, md: 230, xl: 260 }}
              >
                <Box
                  bgcolor="common.white"
                  borderRadius="50%"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <IconButton size="small" aria-label="Play voice message">
                    <PlayArrow />
                  </IconButton>
                </Box>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  flexDirection="column"
                  p={1}
                  sx={{ minWidth: 80 }}
                >
                  <Box
                    sx={{
                      height: 24,
                      width: 118,
                      background: `url(${ONBOARDING_GRID_IMAGES}/waveform.png)`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                    }}
                  />
                  <Typography fontSize={10}>00:08</Typography>
                </Box>
              </Box>
            </MessageBubble>
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              width: { xs: '100%', xl: '280px' },
            }}
          >
            <Avatar
              alt="You"
              src={`${ONBOARDING_GRID_IMAGES}/shily.png`}
              sx={{
                width: { xs: 36, sm: 40, md: 45 },
                height: { xs: 36, sm: 40, md: 45 },
                bgcolor: ONBOARDING_BG_COLOR,
              }}
            />
            <Typography fontSize={{ xs: 10, sm: 11, md: 12 }} ml={1}>
              You
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingConversations;
