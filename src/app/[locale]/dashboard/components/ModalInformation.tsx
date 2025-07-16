import {
  DEFAULT_MAX_WIDTH_300,
  DEFAULT_DASHBOARD_ICONS,
} from '@/constants/general';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { title } from 'process';
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
    <Box
      maxWidth={DEFAULT_MAX_WIDTH_300}
      width={{ xs: '90%', sm: DEFAULT_MAX_WIDTH_300 }}
      marginX="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={{ xs: 2, sm: 3 }}
      gap={2}
    >
      <Image
        alt=""
        src={`${DEFAULT_DASHBOARD_ICONS}/${icon}`}
        width={36}
        height={36}
      />
      <Typography variant="h2" fontWeight={700}>
        {title}
      </Typography>

      {children}
    </Box>
  );
};

export default ModalInformation;
