'use client';

import Title from '@/components/common/Title';
import { FormBuilder } from '@/components/Fields';
import { FormBuilderProps } from '@/components/Fields/components/FormBuilder';
import FileUploadForm from '@/components/common/FileUploadForm';
import { CommunicationPayload } from '@/services/onboarding/types';
import { onInvalidSubmit } from '@/utils/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import SkipStep from './SkipStep';
import { useAppContext } from '@/hooks/useAppContext';
import { ButtonWithLoading } from '@/components/ButtonWithLoading';

interface CommunicationStyleProps {
  onSkip: VoidFunction;
}

const CommunicationStyle: FC<CommunicationStyleProps> = ({ onSkip }) => {
  const { isMobile } = useAppContext();
  const labels: Record<keyof CommunicationPayload, string> = {
    description: 'description',
    saying: 'saying',
    lovedVoice: 'Loved Voice',
    textVoice: 'Text Voice',
  };

  const resolveSchema: yup.ObjectSchema<CommunicationPayload> = yup.object({
    description: yup.string().nullable().required().label(labels.description),
    saying: yup.string().nullable().required().label(labels.saying),
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
        boldLabel: true,
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
        boldLabel: true,
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
  };

  return (
    <FormProvider {...methods}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="100%"
        flex={1}
      >
        <Box>
          <Title
            title="Communication Style"
            variant={isMobile ? 'h3' : 'h1'}
            sx={{ mt: 4, mb: 2, justifyContent: 'flex-start' }}
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
          </Grid>
        </Box>

        <Box mt={2}>
          <Grid container textAlign="center" spacing={2}>
            <Grid size={{ xs: 12 }}>
              <ButtonWithLoading
                isLoading={isPending}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
              >
                Continue
              </ButtonWithLoading>
              <SkipStep onSkip={onSkip} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default CommunicationStyle;
