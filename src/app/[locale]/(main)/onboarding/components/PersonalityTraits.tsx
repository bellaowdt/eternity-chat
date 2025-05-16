'use client';

import GradientButtonWithLoading from '@/components/common/GradientButtonWithLoading';
import Title from '@/components/common/Title';
import { FormBuilder } from '@/components/Fields';
import { FormBuilderProps } from '@/components/Fields/components/FormBuilder';
import { PersonalityTraitsPayload } from '@/services/onboarding/types';
import { onInvalidSubmit } from '@/utils/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import SkipStep from './SkipStep';
import { PersonalityList } from '@/constants/general';

interface GeneralInformationProps {
  onSkip: VoidFunction;
}

const GeneralInformation: FC<GeneralInformationProps> = ({ onSkip }) => {
  const labels: Record<keyof PersonalityTraitsPayload, string> = {
    favoriteActivities: 'Favorite Activities',
    personality: 'Personality',
  };

  const resolveSchema: yup.ObjectSchema<PersonalityTraitsPayload> = yup.object({
    favoriteActivities: yup
      .string()
      .nullable()
      .required()
      .label(labels.favoriteActivities),
    personality: yup.string().nullable().required().label(labels.personality),
  });

  const methods = useForm<PersonalityTraitsPayload>({
    resolver: yupResolver(resolveSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<PersonalityTraitsPayload> = async (payload) => {
    console.log(payload);
    // await mutateAsync({ payload });
  };

  const fields: FormBuilderProps['fields'] = {
    favoriteActivities: {
      name: 'favoriteActivities',
      label: 'Did they have any hobbies or favorite activities?',
      type: 'String',
      props: {
        placeholder: 'Type Here',
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    personalityLabel: {
      type: 'Custom',
      component: (
        <Typography variant="body1" pt={3}>
          Which words best describe their personality?
        </Typography>
      ),
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    ...PersonalityList.reduce((acc, item) => {
      acc[item?.value] = {
        name: item.value,
        label: item.label,
        type: 'Checkbox',
        ui: {
          grid: {
            size: { xs: 12 },
          },
        },
      };
      return acc;
    }, {} as FormBuilderProps['fields']),
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      minHeight="100vh"
      p={4}
    >
      <FormProvider {...methods}>
        <Title
          title="Personality Traits"
          sx={{ my: 5, justifyContent: 'flex-start' }}
        />
        <Grid
          container
          spacing={2}
          component="form"
          onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
        >
          <FormBuilder fields={fields} />
          <Grid size={{ xs: 12 }} textAlign="center">
            <GradientButtonWithLoading
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
            >
              Continue
            </GradientButtonWithLoading>
            <SkipStep onSkip={onSkip} />
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default GeneralInformation;
