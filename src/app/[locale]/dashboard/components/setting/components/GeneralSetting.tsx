import { CustomSelect, CustomSwitch } from '@/components/Fields';
import { useLanguages } from '@/hooks/useLanguages';
import { IGeneralSetting } from '@/services/iam/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

const GeneralSetting = () => {
  const t = useTranslations();
  const langs = useLanguages();

  const labels: Record<keyof IGeneralSetting, string> = {
    themeType: 'Dark Theme',
    language: 'Language',
    isDeleteChats: 'Delete All Chats',
  };

  const resolveSchema: yup.ObjectSchema<IGeneralSetting> = yup.object({
    themeType: yup.string().nullable().required().label(labels.themeType),
    language: yup.string().nullable().required().label(labels.email),
    isDeleteChats: yup
      .string()
      .nullable()
      .required()
      .label(labels.isDeleteChats),
  });

  const methods = useForm<Partial<IGeneralSetting>>({
    resolver: yupResolver(resolveSchema),
  });
  const { handleSubmit, control } = methods;

  return (
    <FormProvider {...methods}>
      <Grid container alignItems="center" py={1}>
        <Grid size={{ xs: 4 }}>
          <Typography variant="body1">{labels.themeType}</Typography>
        </Grid>
        <Grid size={{ xs: 8 }} textAlign="right">
          <CustomSwitch label="" name="themeType" />
        </Grid>
      </Grid>
      <Divider />

      <Grid container alignItems="center" py={1}>
        <Grid size={{ xs: 4 }}>
          <Typography fontWeight={500}>{labels.language}</Typography>
        </Grid>
        <Grid size={{ xs: 8 }} textAlign="right" sx={{ px: 2 }}>
          <CustomSelect variant="outlined" options={langs} />
        </Grid>
      </Grid>
      <Divider />

      <Grid container alignItems="center" py={1}>
        <Grid size={{ xs: 5 }}>
          <Typography variant="body1">{labels.isDeleteChats}</Typography>
        </Grid>
        <Grid size={{ xs: 7 }} textAlign="right">
          <Button>Delete</Button>
        </Grid>
      </Grid>
      <Divider />

      <Box mt={4} display="flex" justifyContent="flex-end">
        <Button variant="contained">Save Changes</Button>
      </Box>
    </FormProvider>
  );
};

export default GeneralSetting;
