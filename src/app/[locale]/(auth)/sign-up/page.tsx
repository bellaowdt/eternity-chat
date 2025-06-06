'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Link, Typography, Box } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ButtonWithLoading } from '@/components/ButtonWithLoading';
import { FormBuilder } from '@/components/Fields';
import { FormBuilderProps } from '@/components/Fields/components/FormBuilder';
import { SignUpPayload } from '@/services/iam/types';
import { onInvalidSubmit } from '@//utils/form';
import * as yup from 'yup';
import Title from '@/components/common/Title';
import { useTranslations } from 'next-intl';
import { RemoveRedEye } from '@mui/icons-material';
import { DEFAULT_SIGNIN_PATH } from '@/constants/routes';

const SignUp = () => {
  const t = useTranslations();

  const labels: Record<keyof SignUpPayload | 'confirmPassword', string> = {
    email: t('common.fields.email'),
    password: t('common.fields.password'),
    name: t('common.fields.name'),
    confirmPassword: t('common.fields.confirmPassword'),
  };

  const resolveSchema: yup.ObjectSchema<SignUpPayload> = yup.object({
    email: yup.string().email().nullable().required().label(labels.email),
    password: yup.string().min(6).nullable().required().label(labels.password),
    confirmPassword: yup
      .string()
      .nullable()
      .required()
      .oneOf([yup.ref('password')], 'passwordMustMatch')
      .label(labels.confirmPassword),
    name: yup.string().nullable().required().label(labels.name),
  });

  const methods = useForm<SignUpPayload>({
    resolver: yupResolver(resolveSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log('errors>>>', errors);

  // const { mutateAsync, isPending } = useMutation({
  //   mutationFn: sendCode,
  // });

  const onSubmit: SubmitHandler<SignUpPayload> = async () => {
    // await mutateAsync({
    //   payload: {
    //     email: payload.email,
    //   },
    // });
    // router.push('', { state: payload });
  };

  const fields: FormBuilderProps['fields'] = {
    name: {
      name: 'name',
      label: labels.name,
      type: 'String',
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
      props: {
        placeholder: t('common.fields.namePlaceholder'),
        inputProps: {
          autoComplete: 'new-password',
        },
      },
    },
    email: {
      name: 'email',
      label: labels.email,
      type: 'String',
      props: {
        placeholder: t('common.fields.emailPlaceholder'),
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
        placeholder: labels.password,
        InputProps: {
          autoComplete: 'new-password',
          endAdornment: <RemoveRedEye fontSize="small" />,
        },
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    confirmPassword: {
      type: 'String',
      name: 'confirmPassword',
      label: labels.confirmPassword,
      props: {
        type: 'password',
        placeholder: labels.confirmPassword,
        inputProps: {
          autoComplete: 'new-password',
        },
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
      justifyContent="center"
      minHeight="100vh"
      p={4}
    >
      <FormProvider {...methods}>
        <Box bgcolor="common.white" maxWidth={500} p={4} borderRadius={0.5}>
          <Title
            title={t('pages.signUp.createAccount')}
            sx={{ my: 1, justifyContent: 'flex-start' }}
            variant="h3"
          />
          <Grid
            container
            spacing={2}
            component="form"
            onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
            sx={{
              mt: 3,
              flexDirection: (theme) =>
                theme.direction === 'rtl' ? 'row-reverse' : 'row',
            }}
          >
            <FormBuilder fields={fields} />
            <Grid size={{ xs: 12 }}>
              <Typography>
                {t.rich('pages.signUp.signUpPrivacyPolicyText', {
                  terms: (chunks) => (
                    <Link href="/terms-conditions">{chunks}</Link>
                  ),
                  policy: (chunks) => (
                    <Link href="/privacy-policy">{chunks}</Link>
                  ),
                })}
              </Typography>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <ButtonWithLoading
                // isLoading={isPending}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disableElevation
                size="large"
              >
                {t('common.buttons.continue')}
              </ButtonWithLoading>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography>
                {t('pages.signUp.alreadyHaveAnAccount')}
                <Link href={DEFAULT_SIGNIN_PATH}>
                  {''} {t('common.buttons.login')}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default SignUp;
