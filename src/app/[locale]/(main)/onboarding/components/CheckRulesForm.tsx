'use client';

import SizedButton from '@/components/common/SizedButton';
import { DEFAULT_ONBOARDING_STEPS_PATH } from '@/constants/routes';
import { useAppContext } from '@/hooks/useAppContext';
import { Link, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

type FormValues = {
  acceptClubRule: boolean;
};

const CheckClubRulesForm = ({
  onSubmitFunc = () => {},
}: {
  onSubmitFunc?: () => void;
}) => {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();

  const { isMobile } = useAppContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      acceptClubRule: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    if (data.acceptClubRule) {
      onSubmitFunc();
    }
  };

  const handleStart = () => {
    router.push(DEFAULT_ONBOARDING_STEPS_PATH);
  };

  return (
    <Stack spacing={1}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
        <Controller
          name="acceptClubRule"
          control={control}
          rules={{ required: 'You must accept the Terms of Service' }}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox {...field} checked={!!field.value} color="primary" />
              }
              label={
                <Typography
                  fontSize={isMobile ? '14px' : '18px'}
                  className={`latoStyleRegular-${locale}`}
                  fontWeight={400}
                >
                  {t.rich('pages.onboarding.welcome.terms', {
                    terms: (chunks) => (
                      <Link href="/terms-conditions" underline="hover">
                        {chunks}
                      </Link>
                    ),
                  })}
                </Typography>
              }
            />
          )}
        />
        {errors.acceptClubRule && (
          <FormHelperText error>{errors.acceptClubRule.message}</FormHelperText>
        )}
      </Box>
      <SizedButton variant="contained" onClick={handleStart}>
        <Typography variant="subtitle1" fontWeight={700}>
          Let’s Start
        </Typography>
      </SizedButton>
    </Stack>
  );
};

export default CheckClubRulesForm;
