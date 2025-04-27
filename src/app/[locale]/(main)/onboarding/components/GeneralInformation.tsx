"use client";

import Title from "@/components/Auth/components/Title";
import { FormBuilder } from "@/components/Fields";
import { FormBuilderProps } from "@/components/Fields/components/FormBuilder";
import GradientButtonWithLoading from "@/components/GradientButtonWithLoading";
import { generalInformationUpdate } from "@/services/onboarding";
import { GeneralInformationPayload } from "@/services/onboarding/types";
import { onInvalidSubmit } from "@/utils/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const GeneralInformation = () => {
  const labels: Record<keyof GeneralInformationPayload, string> = {
    name: "Name",
    relationship: "Relationship",
    gender: "Gender",
  };

  const resolveSchema: yup.ObjectSchema<GeneralInformationPayload> = yup.object(
    {
      name: yup.string().nullable().required().label(labels.name),
      relationship: yup
        .string()
        .nullable()
        .required()
        .label(labels.relationship),
      gender: yup.string().nullable().required().label(labels.gender),
    }
  );

  const methods = useForm<Partial<GeneralInformationPayload>>({
    resolver: yupResolver(resolveSchema),
  });

  const { handleSubmit } = methods;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: generalInformationUpdate,
  });

  const onSubmit: SubmitHandler<GeneralInformationPayload> = async (
    payload
  ) => {
    await mutateAsync({ payload });
  };

  const fields: FormBuilderProps["fields"] = {
    name: {
      name: "name",
      label: labels.name,
      type: "String",
      props: {
        placeholder: "What was their name?",
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    relationship: {
      name: "relationship",
      label: "What was your relationship with them?",
      type: "Selective",
      options: [],
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    gender: {
      name: "gender",
      label: "Their Gender (Optional)",
      type: "Selective",
      options: [],
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
        <Title title="General Information" sx={{ my: 5 }} />
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
              Continue
            </GradientButtonWithLoading>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default GeneralInformation;
