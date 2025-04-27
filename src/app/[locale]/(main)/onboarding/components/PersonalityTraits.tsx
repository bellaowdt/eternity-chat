"use client";

import Title from "@/components/Auth/components/Title";
import { FormBuilder, Option } from "@/components/Fields";
import { FormBuilderProps } from "@/components/Fields/components/FormBuilder";
import GradientButtonWithLoading from "@/components/GradientButtonWithLoading";
import { generalInformationUpdate } from "@/services/onboarding";
import { PersonalityTraitsPayload } from "@/services/onboarding/types";
import { onInvalidSubmit } from "@/utils/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const GeneralInformation = () => {
  const labels: Record<keyof PersonalityTraitsPayload, string> = {
    favoriteActivities: "Favorite Activities",
    personality: "Personality",
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

  const { mutateAsync, isPending } = useMutation({
    mutationFn: generalInformationUpdate,
  });

  const onSubmit: SubmitHandler<PersonalityTraitsPayload> = async (payload) => {
    await mutateAsync({ payload });
  };

  // TODO: Get from API
  const personalityList: Option[] = [
    {
      id: 1,
      label: "Caring",
      value: "Caring",
    },
    {
      id: 2,
      label: "Funny",
      value: "Funny",
    },
    {
      id: 3,
      label: "Thoughtful",
      value: "Thoughtful",
    },
    {
      id: 4,
      label: "Adventurous",
      value: "Adventurous",
    },
    {
      id: 5,
      label: "Creative",
      value: "Creative",
    },
    {
      id: 6,
      label: "Calm",
      value: "Calm",
    },
  ];

  const fields: FormBuilderProps["fields"] = {
    favoriteActivities: {
      name: "favoriteActivities",
      label: labels.favoriteActivities,
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
    ...personalityList.reduce((acc, item) => {
      acc[item.value] = {
        name: item.value,
        label: item.label,
        type: "Checkbox",
        props: {
          placeholder: "Which words best describe their personality?",
        },
        ui: {
          grid: {
            size: { xs: 12 },
          },
        },
      };
      return acc;
    }, {} as FormBuilderProps["fields"]),
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
