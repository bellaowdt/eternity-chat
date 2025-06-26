'use client';

import {
  GREY_COLOR,
  LIGHT_BLUE_COLOR,
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

const OnboardingConversations = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: { xs: 600, sm: 700, md: 800 },
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 1, sm: 2, md: 4 },
        py: { xs: 3, sm: 4, md: 5 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Joe message bubble */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '8%', sm: '10%', md: '10%' },
          left: { xs: '4%', sm: '5%', md: '6%' },
          maxWidth: { xs: '70%', sm: '65%', md: '60%' },
          zIndex: 1,
        }}
      >
        <MessageBubble
          time="2025-05-05 15:41:00"
          bubbleColor={LIGHT_BLUE_COLOR}
          bubbleTimeColor={GREY_COLOR}
          bubbleTextColor={common.white}
          tailPosition={ChatCardDirectionEnum.RIGHT}
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
          top: { xs: '38%', sm: '26', md: '28%' },
          left: { xs: '4%', sm: '5%', md: '6%' },
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
          width: { xs: 260, sm: 420, md: 430 },
          height: { xs: 350, sm: 420, md: 536 },
          [theme.breakpoints.between(500, 768)]: {
            width: 400,
            height: 450,
          },
          position: 'absolute',
          top: { xs: '18%', sm: '20%', md: '20%' },
          left: { xs: '18%', sm: '20%', md: '20%' },
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
          top: { xs: '70%', sm: '70%', md: '72%', xl: '78%' },
          right: { xs: '1%', sm: '15%', md: '1%', xl: '10%' },
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
          <MessageBubble
            time="2025-05-05 15:41:00"
            bubbleColor={LIGHT_BLUE_COLOR}
            bubbleTextColor={common.black}
            tailPosition={ChatCardDirectionEnum.RIGHT}
            bubbleTimeColor={GREY_COLOR}
            bubblePadding={1}
          >
            <Box display="flex" alignItems="center" width="100%" minWidth={200}>
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
                alignItems="flex-end"
                flexDirection="column"
                p={1}
                sx={{ minWidth: 80 }}
              >
                <Box
                  sx={{
                    height: 24,
                    width: '100%',
                    maxWidth: 100,
                    background: `url(${ONBOARDING_GRID_IMAGES}/waveform.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                  }}
                />
                <Typography fontSize={10} align="right">
                  00:08
                </Typography>
              </Box>
            </Box>
          </MessageBubble>

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              width: { xs: '100%', sm: '100%', md: '100%', xl: '160px' },
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
