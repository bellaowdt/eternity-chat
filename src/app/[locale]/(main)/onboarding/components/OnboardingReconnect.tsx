import {
  ONBOARDING_BG_COLOR,
  ONBOARDING_GRID_IMAGES,
} from '@/constants/general';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import useResponsiveScale from '../hooks/useResponsiveScale ';

const profiles = [
  {
    id: 1,
    image: `${ONBOARDING_GRID_IMAGES}/bella.png`,
    top: '10%',
    left: '0%',
    blur: 2,
    width: 231,
    height: 288,
  },
  {
    id: 2,
    image: `${ONBOARDING_GRID_IMAGES}/carlos.png`,
    top: '15%',
    left: '35%',
    blur: 8,
    width: 128,
    height: 159,
  },
  {
    id: 3,
    image: `${ONBOARDING_GRID_IMAGES}/christina.png`,
    top: '25%',
    left: '27%',
    focus: true,
    width: 334,
    height: 416,
  },
  {
    id: 4,
    image: `${ONBOARDING_GRID_IMAGES}/sara.png`,
    top: '7%',
    left: '70%',
    blur: 6,
    width: 140,
    height: 175,
  },
  {
    id: 5,
    image: `${ONBOARDING_GRID_IMAGES}/al.png`,
    top: '53%',
    left: '10%',
    blur: 8,
    width: 131,
    height: 164,
  },
  {
    id: 6,
    image: `${ONBOARDING_GRID_IMAGES}/chris.png`,
    top: '27%',
    left: '67%',
    blur: 2,
    width: 233,
    height: 290,
  },
  {
    id: 7,
    image: `${ONBOARDING_GRID_IMAGES}/sofia.png`,
    top: '68%',
    left: '39%',
    blur: 8,
    width: 185,
    height: 230,
  },
  {
    id: 8,
    image: `${ONBOARDING_GRID_IMAGES}/ava.jpg`,
    top: '60%',
    left: '69%',
    blur: 14,
    width: 73,
    height: 90,
  },
];

const OnboardingReconnect = () => {
  const scale = useResponsiveScale();
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: 600, sm: 700, md: 800 },
        overflow: 'hidden',
      }}
    >
      {profiles.map(({ id, image, focus, top, left, width, height, blur }) => (
        <Card
          key={id}
          sx={{
            position: 'absolute',
            top,
            left,
            width: width * scale,
            height: height * scale,
            boxShadow: focus ? 8 : 1,
            borderRadius: 0.5,
            overflow: 'hidden',
            transform: focus ? 'scale(1)' : 'scale(0.9)',
            filter: focus ? 'none' : `blur(${blur}px)`,
            transition: 'all 0.4s ease-in-out',
            background: ONBOARDING_BG_COLOR || 'common.white',
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt="profile"
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
              px: 2,
              py: 1,
            }}
          >
            <Typography fontWeight="bold" variant="subtitle1" color="white">
              Christina
            </Typography>
            <Typography variant="body2" color="white" sx={{ opacity: 0.7 }}>
              Relationip
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default OnboardingReconnect;
