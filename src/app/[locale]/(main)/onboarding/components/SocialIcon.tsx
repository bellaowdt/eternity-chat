import React from 'react';
import RoundedIcon from '@/components/common/RoundedIcon';
import { GREY_F9_COLOR } from '@/constants/general';
import Image from 'next/image';
import Link from 'next/link';

type SocialIconProps = {
  alt: string;
  iconPath: string;
  href?: string;
  width: number;
  height: number;
};

const SocialIcon: React.FC<SocialIconProps> = ({
  alt,
  iconPath,
  href,
  width,
  height,
}) => {
  const icon = (
    <RoundedIcon
      width={50}
      height={50}
      sxProp={{
        border: '1px solid #BDBDBD',
        backgroundColor: GREY_F9_COLOR,
      }}
      icon={<Image alt={alt} width={width} height={height} src={iconPath} />}
    />
  );

  return href ? (
    <Link href={href} target="_blank">
      {icon}
    </Link>
  ) : (
    icon
  );
};

export default SocialIcon;
