import {
  DEFAULT_MAX_WIDTH_369,
  DEFAULT_DASHBOARD_ICONS,
} from '@/constants/general';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { FC, ReactNode } from 'react';

type ModalInformationProps = {
  icon: string;
  title: string;
  children?: ReactNode;
};

const ModalInformation: FC<ModalInformationProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <Stack width="100%" justifyContent="center" alignItems="center">
      <Image
        alt=""
        src={`${DEFAULT_DASHBOARD_ICONS}/${icon}`}
        width={42}
        height={42}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        maxWidth={DEFAULT_MAX_WIDTH_369}
        width={{ xs: '90%', sm: DEFAULT_MAX_WIDTH_369 }}
        px={{ xs: 2, sm: 4 }}
        gap={2}
        mb={4}
      >
        <Typography variant="h2" fontWeight={700} mt={3}>
          {title}
        </Typography>

        {children}
      </Box>
    </Stack>
  );
};

export default ModalInformation;
