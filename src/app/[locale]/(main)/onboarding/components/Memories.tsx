'use client';

import Title from '@/components/common/Title';
import { FormBuilder } from '@/components/Fields';
import { FormBuilderProps } from '@/components/Fields/components/FormBuilder';
import GradientButtonWithLoading from '@/components/common/GradientButtonWithLoading';
import { MemoriesPayload } from '@/services/onboarding/types';
import { onInvalidSubmit } from '@/utils/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import SkipStep from './SkipStep';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { DEFAULT_ONBOARDING_COMPLETE_PATH } from '@/constants/routes';
import { useAppContext } from '@/hooks/useAppContext';

interface MemoriesProps {
  onSkip: VoidFunction;
}

const Memories: FC<MemoriesProps> = ({ onSkip }) => {
  const router = useRouter();
  const { isMobile } = useAppContext();

  const labels: Record<keyof MemoriesPayload, string> = {
    description: 'description',
    receiveReminderDate: 'receiveReminderDate',
  };

  const resolveSchema: yup.ObjectSchema<Partial<MemoriesPayload>> = yup.object({
    description: yup.string().nullable().required().label(labels.description),
    receiveReminderDate: yup
      .string()
      .nullable()
      .label(labels.receiveReminderDate),
  });

  const methods = useForm<Partial<MemoriesPayload>>({
    resolver: yupResolver(resolveSchema),
  });

  const { handleSubmit } = methods;

  // const { mutateAsync, isPending } = useMutation({
  //   mutationFn: MemoriesUpdate,
  // });

  const onSubmit: SubmitHandler<Partial<MemoriesPayload>> = async () => {
    // await mutateAsync({ payload });
    router.push(DEFAULT_ONBOARDING_COMPLETE_PATH);
  };

  const fields: FormBuilderProps['fields'] = {
    description: {
      name: 'description',
      label: 'What is your most cherished memory with them?',
      type: 'String',
      props: {
        placeholder: 'Type a short description',
        multiline: true,
        minRows: 6,
        boldLabel: true,
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    // receiveReminderDate: {
    //   name: "receiveReminderDate",
    //   type: "Date",
    //   label:
    //     "If you'd like, you can provide a meaningful date to receive a gentle reminder.",
    //   ui: {
    //     grid: {
    //       size: { xs: 12 },
    //     },
    //   },
    // },
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
            title="Memories"
            variant={isMobile ? 'h3' : 'h1'}
            sx={{ mt: 4, mb: 2, justifyContent: 'flex-start' }}
          />
          <Grid
            container
            spacing={2}
            component="form"
            onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
          >
            <FormBuilder fields={fields} />
          </Grid>
        </Box>
        <Box mt={2}>
          <Grid container textAlign="center" spacing={2}>
            <Grid size={{ xs: 12 }}>
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
        </Box>
      </Box>
    </FormProvider>
  );
};

export default Memories;
