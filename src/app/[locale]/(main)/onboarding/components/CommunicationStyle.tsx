'use client';

import Title from '@/components/common/Title';
import { FormBuilder } from '@/components/Fields';
import { FormBuilderProps } from '@/components/Fields/components/FormBuilder';
import FileUploadForm from '@/components/common/FileUploadForm';
import GradientButtonWithLoading from '@/components/common/GradientButtonWithLoading';
import { CommunicationPayload } from '@/services/onboarding/types';
import { onInvalidSubmit } from '@/utils/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import SkipStep from './SkipStep';

interface CommunicationStyleProps {
  onSkip: VoidFunction;
}

const CommunicationStyle: FC<CommunicationStyleProps> = ({ onSkip }) => {
  const labels: Record<keyof CommunicationPayload, string> = {
    description: 'description',
    saying: 'saying',
    lovedVoice: 'Loved Voice',
    textVoice: 'Text Voice',
  };

  const resolveSchema: yup.ObjectSchema<CommunicationPayload> = yup.object({
    description: yup.string().required().label(labels.description),
    saying: yup.string().required().label(labels.saying),
    lovedVoice: yup.string().label(labels.lovedVoice),
    textVoice: yup.string().label(labels.textVoice),
  });

  const methods = useForm<CommunicationPayload>({
    resolver: yupResolver(resolveSchema),
  });

  const { handleSubmit } = methods;
  const { isPending } = useMutation({
    // mutationFn: AppearanceUpdate,
  });

  const onSubmit: SubmitHandler<CommunicationPayload> = async () => {
    //   await mutateAsync({ payload });
  };

  const fields: FormBuilderProps['fields'] = {
    description: {
      name: 'description',
      label: 'How would you describe their way of talking?',
      type: 'String',
      props: {
        placeholder:
          'E.g., They spoke with a warm and friendly tone, often using kind words and gentle humor. Their messages were thoughtful and supportive.',
        multiline: true,
        minRows: 8,
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    photo: {
      name: 'saying',
      label: 'Is there a particular phrase or saying they used often?',
      type: 'String',
      props: {
        placeholder: "E.g., 'Keep smiling!",
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
      minHeight="100vh"
      p={4}
    >
      <FormProvider {...methods}>
        <Title
          title="Communication Style"
          sx={{ my: 5, justifyContent: 'flex-start' }}
        />
        <Grid
          container
          spacing={3}
          component="form"
          onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
        >
          <FormBuilder fields={fields} />

          <Grid size={{ xs: 12 }}>
            <FileUploadForm
              name="lovedVoice"
              label="Upload a voice recording of your loved one"
              acceptedFormat=".mp3,wav"
              acceptedFormatText="Supported formats: MP3, WAV"
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FileUploadForm
              name="textVoice"
              label="Would you like to upload text messages they’ve sent you?"
              subLabel="This helps us better understand their unique way of talking."
              acceptedFormat=".mp3,wav"
              acceptedFormatText="Supported formats: MP3, WAV"
            />
          </Grid>

          <Grid size={{ xs: 12 }} textAlign="center">
            <GradientButtonWithLoading
              isLoading={isPending}
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

export default CommunicationStyle;
