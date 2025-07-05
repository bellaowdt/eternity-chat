import { Box } from '@mui/material';
import React, { FC } from 'react';

type RoundedIconProps = {
  width: number;
  height: number;
  backgroundColor?: string;
  icon?: any;
  onClickFunc?: VoidFunction;
};

const RoundedIcon: FC<RoundedIconProps> = ({
  width,
  height,
  icon,
  backgroundColor = 'common.black',
  onClickFunc,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="100%"
      width={width}
      height={height}
      bgcolor={backgroundColor}
      sx={{ cursor: 'pointer' }}
      onClick={onClickFunc}
    >
      {icon}
    </Box>
  );
};

export default RoundedIcon;
