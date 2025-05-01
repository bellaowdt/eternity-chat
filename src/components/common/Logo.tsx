import React, { FC } from 'react';
import Image from './Image';
import { ImageProps } from 'next/image';
import { DEFAULT_LOGO_PATH } from '@/constants/routes';

const Logo: FC<Partial<ImageProps>> = (props) => {
  return (
    <Image
      draggable={false}
      width={220}
      height={80}
      alt=""
      src={props?.src ?? DEFAULT_LOGO_PATH}
      {...props}
    />
  );
};

export default Logo;
