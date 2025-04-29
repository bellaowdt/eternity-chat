"use client";

import Title from "@/components/Auth/components/Title";
import { FormBuilder } from "@/components/Fields";
import { FormBuilderProps } from "@/components/Fields/components/FormBuilder";
import FileUploadForm from "@/components/FileUpload/FileUploadForm";
import GradientButtonWithLoading from "@/components/GradientButtonWithLoading";
import {
  AppearancePayload,
  CommunicationPayload,
} from "@/services/onboarding/types";
import { onInvalidSubmit } from "@/utils/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const CommunicationStyle = () => {
  const labels: Record<keyof CommunicationPayload, string> = {
    description: "description",
    saying: "saying",
    lovedVoice: "Loved Voice",
    textVoice: "Text Voice",
  };

  const resolveSchema: yup.ObjectSchema<CommunicationPayload> = yup.object({
    description: yup.string().nullable().required().label(labels.description),
    saying: yup.string().nullable().required().label(labels.saying),
    lovedVoice: yup.string().nullable().label(labels.lovedVoice),
    textVoice: yup.string().nullable().label(labels.textVoice),
  });

  const methods = useForm<AppearancePayload>({
    resolver: yupResolver(resolveSchema),
  });

  const { handleSubmit } = methods;
  const { mutateAsync, isPending } = useMutation({
    // mutationFn: AppearanceUpdate,
  });

  const onSubmit: SubmitHandler<AppearancePayload> = async (payload) => {
    //   await mutateAsync({ payload });
  };

  const fields: FormBuilderProps["fields"] = {
    description: {
      name: "description",
      label: "How would you describe their way of talking?",
      type: "String",
      props: {
        placeholder:
          "E.g., They spoke with a warm and friendly tone, often using kind words and gentle humor. Their messages were thoughtful and supportive.",
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
      name: "saying",
      label: "Is there a particular phrase or saying they used often?",
      type: "String",
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
          sx={{ my: 5, justifyContent: "flex-start" }}
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
            <Button variant="text" sx={{ p: 2 }}>
              Skip for Now
            </Button>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default CommunicationStyle;
