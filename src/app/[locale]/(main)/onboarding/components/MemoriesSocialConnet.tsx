import { Box, Stack, Typography } from '@mui/material';
import { useLocale } from 'next-intl';
import React from 'react';
import {
  FACEBOOK_ICON_PATH,
  INSTAGRAM_ICON_PATH,
  WHATSAPP_ICON_PATH,
  X_ICON_PATH,
} from '@/constants/general';
import SocialIcon from './SocialIcon';

const socialIcons = [
  {
    name: 'Instagram',
    iconPath: INSTAGRAM_ICON_PATH,
    href: 'https://www.instagram.com/',
    width: 25,
    height: 25,
  },
  {
    name: 'X (Twitter)',
    iconPath: X_ICON_PATH,
    href: 'https://x.com/',
    width: 24,
    height: 24,
  },
  {
    name: 'Facebook',
    iconPath: FACEBOOK_ICON_PATH,
    href: 'https://facebook.com/',
    width: 11,
    height: 20,
  },
  {
    name: 'WhatsApp',
    iconPath: WHATSAPP_ICON_PATH,
    href: 'https://wa.me/',
    width: 21,
    height: 20,
  },
];

const MemoriesSocialConnect = () => {
  const locale = useLocale();

  return (
    <Box mt={2}>
      <Stack>
        <Typography variant="subtitle1" fontWeight={700}>
          Connect Social Media
        </Typography>
        <Typography
          variant="subtitle1"
          className={`latoStyleRegular-${locale}`}
        >
          We will only access data you&apos;ve permitted.
        </Typography>
      </Stack>

      <Stack spacing={2} direction="row" pt={3}>
        {socialIcons.map(({ name, iconPath, href, width, height }) => (
          <SocialIcon
            key={name}
            alt={name}
            iconPath={iconPath}
            href={href}
            width={width}
            height={height}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default MemoriesSocialConnect;
