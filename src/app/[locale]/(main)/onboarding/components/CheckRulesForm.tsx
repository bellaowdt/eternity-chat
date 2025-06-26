'use client';

import { DEFAULT_ONBOARDING_STEPS_PATH } from '@/constants/routes';
import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
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
              sx={{ fontSize: '18' }}
              label="I have read and agree to the Terms of Service"
            />
          )}
        />
        {errors.acceptClubRule && (
          <FormHelperText error>{errors.acceptClubRule.message}</FormHelperText>
        )}
      </Box>
      <Button
        variant="contained"
        onClick={handleStart}
        sx={{ fontSize: '16px' }}
      >
        Let’s Start
      </Button>
    </Stack>
  );
};

export default CheckClubRulesForm;
