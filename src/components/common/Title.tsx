import { GREY_COLOR } from '@/constants/general';
import { Stack, SxProps, Typography } from '@mui/material';
import { useLocale } from 'next-intl';
import { FC } from 'react';

export interface TitleProps {
  title: string;
  subTitle?: string;
  sx?: SxProps;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const Title: FC<TitleProps> = ({ title, subTitle, sx, variant = 'h1' }) => {
  const locale = useLocale();

  return (
    <Stack spacing={2} sx={{ ...sx }}>
      <Typography variant={variant} fontWeight="700" color={GREY_COLOR}>
        {title}
      </Typography>
      <Typography
        variant="h4"
        fontWeight={400}
        color={GREY_COLOR}
        className={`latoStyleBold-${locale}`}
      >
        {subTitle}
      </Typography>
    </Stack>
  );
};

export default Title;
