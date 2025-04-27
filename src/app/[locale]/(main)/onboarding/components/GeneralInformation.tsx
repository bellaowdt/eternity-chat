"use client";

import Title from "@/components/Auth/components/Title";
import { FormBuilder, Option } from "@/components/Fields";
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
  const methods = useForm<GeneralInformationPayload>({
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

  // TODO: Get from API
  const relationshipList: Option[] = [
    {
      id: 1,
      label: "Friend",
      value: "Friend",
    },
    {
      id: 2,
      label: "Family",
      value: "Family",
    },
    {
      id: 3,
      label: "Spouse",
      value: "Spouse",
    },
  ];

  const genderList: Option[] = [
    {
      id: 1,
      label: "Female",
      value: "Female",
    },
    {
      id: 2,
      label: "Male",
      value: "Male",
    },
  ];

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
      options: relationshipList || [],
      props: {
        placeholder: "What was your relationship with them?",
      },
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
      options: genderList || [],
      props: {
        placeholder: "Their Gender (Optional)",
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
          title="General Information"
          sx={{ my: 5, justifyContent: "flex-start" }}
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
              Continue
            </GradientButtonWithLoading>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default GeneralInformation;
