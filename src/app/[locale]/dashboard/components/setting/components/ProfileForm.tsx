import { CustomTextField } from '@/components/Fields';
import { IAccountSetting } from '@/services/iam/types';
import { yupResolver } from '@hookform/resolvers/yup';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Avatar, Box, Button, Divider, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

const ProfileForm = () => {
  const t = useTranslations();

  const labels: Record<keyof IAccountSetting, string> = {
    name: 'Name',
    email: 'Email',
    password: 'Password',
  };

  const resolveSchema: yup.ObjectSchema<IAccountSetting> = yup.object({
    name: yup.string().nullable().required().label(labels.name),
    email: yup.string().nullable().required().label(labels.email),
    password: yup.string().nullable().required().label(labels.password),
  });

  const methods = useForm<Partial<IAccountSetting>>({
    resolver: yupResolver(resolveSchema),
  });
  const { handleSubmit, control } = methods;

  return (
    <FormProvider {...methods}>
      <Box
        px={2}
        sx={{
          borderRadius: 2,
        }}
      >
        {/* Avatar */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src="https://i.pravatar.cc/150?img=1"
              sx={{ width: 64, height: 64 }}
            />
            <Typography color="primary" sx={{ cursor: 'pointer' }}>
              Edit Image
            </Typography>
          </Box>
        </Box>

        <Divider />

        <Grid container alignItems="center" py={2}>
          <Grid size={{ xs: 3 }}>
            <Typography variant="body1">{labels.name}</Typography>
          </Grid>
          <Grid size={{ xs: 9 }}>
            <CustomTextField
              label=""
              name="name"
              placeholder={labels.name}
              variant="standard"
              InputProps={{
                endAdornment: <EditOutlinedIcon fontSize="small" />,
              }}
              sx={{
                border: 'none',
                borderBottom: '1px solid',
                borderRadius: 0,
                px: 0,
              }}
            />
          </Grid>
        </Grid>
        <Divider />

        <Grid container alignItems="center" py={2}>
          <Grid size={{ xs: 3 }}>
            <Typography fontWeight={500}>{labels.email}</Typography>
          </Grid>
          <Grid size={{ xs: 9 }}>
            <CustomTextField
              label=""
              type="email"
              name="email"
              placeholder={labels.email}
              variant="standard"
              InputProps={{
                endAdornment: <EditOutlinedIcon fontSize="small" />,
              }}
              sx={{
                border: 'none',
                borderBottom: '1px solid',
                borderRadius: 0,
                px: 0,
              }}
            />
          </Grid>
        </Grid>
        <Divider />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Typography>Change Password</Typography>
          <ChevronRightIcon />
        </Box>
        <Divider />

        <Box py={2}>
          <Button variant="text">{t('common.buttons.logout')}</Button>
        </Box>

        <Box mt={4} display="flex" justifyContent="flex-end">
          <Button variant="contained">Save Changes</Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default ProfileForm;
