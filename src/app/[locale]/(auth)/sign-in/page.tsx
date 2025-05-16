'use client';

import Title from '@/components/common/Title';
import GradientButtonWithLoading from '@/components/common/GradientButtonWithLoading';
import LinearFieldset from '@/components/common/LinearFieldset';
import { FormBuilder } from '@/components/Fields';
import { FormBuilderProps } from '@/components/Fields/components/FormBuilder';
import { signIn } from '@/services/iam';
import { SignInPayload } from '@/services/iam/types';
import { onInvalidSubmit } from '@/utils/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Divider, Grid } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import GoogleLoginButton from '../components/GoogleLoginButton';

const SignIn = () => {
  const t = useTranslations();

  const labels: Record<keyof SignInPayload, string> = {
    email: t('common.fields.email'),
    password: t('common.fields.password'),
  };

  const resolveSchema: yup.ObjectSchema<SignInPayload> = yup.object({
    email: yup.string().nullable().required().label(labels.email),
    password: yup.string().nullable().required().label(labels.password),
  });

  const methods = useForm<SignInPayload>({
    resolver: yupResolver(resolveSchema),
  });

  const { handleSubmit } = methods;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signIn,
  });

  const onSubmit: SubmitHandler<SignInPayload> = async (payload) => {
    await mutateAsync({ payload });
  };

  const fields: FormBuilderProps['fields'] = {
    email: {
      name: 'email',
      label: labels.email,
      type: 'String',
      props: {
        placeholder: labels.email,
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    password: {
      name: 'password',
      label: labels.password,
      type: 'String',
      props: {
        type: 'password',
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={4}
    >
      <FormProvider {...methods}>
        <Title
          title={t('pages.signIn.welcomeMsg')}
          subTitle={t('pages.signIn.welcomeSubMsg')}
          sx={{ my: 5, textAlign: 'center' }}
        />
        <Grid
          container
          spacing={2}
          component="form"
          onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
        >
          <FormBuilder fields={fields} />

          <Grid size={{ xs: 12 }}>
            <GradientButtonWithLoading
              isLoading={isPending}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
            >
              {t('common.buttons.continue')}
            </GradientButtonWithLoading>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Divider />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid size={{ xs: 12 }}>
                <LinearFieldset title={t('common.buttons.or')} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <GoogleLoginButton />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default SignIn;
