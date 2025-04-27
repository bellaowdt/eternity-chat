import { Stack, SxProps, Typography } from "@mui/material";
import { FC } from "react";

export interface TitleProps {
  title: string;
  subTitle?: string;
  sx?: SxProps;
}
const Title: FC<TitleProps> = ({ title, subTitle, sx }) => {
  return (
    <Stack spacing={2} sx={{ ...sx }}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h6" color="text.primary">
        {subTitle}
      </Typography>
    </Stack>
  );
};

export default Title;
