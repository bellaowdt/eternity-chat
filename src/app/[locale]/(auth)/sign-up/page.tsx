"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Link, Typography, Box, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ButtonWithLoading } from "@/components/ButtonWithLoading";
import { FormBuilder } from "@/components/Fields";
import { FormBuilderProps } from "@/components/Fields/components/FormBuilder";
import { sendCode } from "@/services/iam";
import { SignUpPayload } from "@/services/iam/types";
import { onInvalidSubmit } from "@//utils/form";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const labels: Record<keyof SignUpPayload | "confirmPassword", string> = {
    email: "Email",
    password: "Password",
    name: "Full Name",
    confirmPassword: "Confirm Password",
  };

  const resolveSchema: yup.ObjectSchema<SignUpPayload> = yup.object({
    email: yup.string().email().nullable().required().label(labels.email),
    password: yup.string().min(6).nullable().required().label(labels.password),
    confirmPassword: yup
      .string()
      .nullable()
      .required()
      .oneOf([yup.ref("password"), null], "passwordMustMatch")
      .label(labels.confirmPassword),
    name: yup.string().nullable().required().label(labels.name),
  });

  const methods = useForm<Partial<SignUpPayload>>({
    resolver: yupResolver(resolveSchema),
  });

  const { handleSubmit } = methods;

  const { mutateAsync, isPending } = useMutation({
    mutationFn: sendCode,
  });

  const onSubmit: SubmitHandler<SignUpPayload> = async (payload) => {
    await mutateAsync({
      payload: {
        email: payload.email,
      },
    });
    router.push("", { state: payload });
  };

  const fields: FormBuilderProps["fields"] = {
    name: {
      name: "name",
      label: labels.name,
      type: "String",
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    email: {
      name: "email",
      label: labels.email,
      type: "String",
      props: {
        inputProps: {
          autoComplete: "new-password",
        },
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    password: {
      name: "password",
      label: labels.password,
      type: "String",
      props: {
        type: "password",
        inputProps: {
          autoComplete: "new-password",
        },
      },
      ui: {
        grid: {
          size: { xs: 12 },
        },
      },
    },
    confirmPassword: {
      type: "String",
      name: "confirmPassword",
      label: labels.confirmPassword,
      props: {
        type: "password",
        inputProps: {
          autoComplete: "new-password",
        },
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
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      p={4}
    >
      <FormProvider {...methods}>
        <Box width="100%" display="flex" justifyContent="flex-start">
          <Typography variant="h3">Create your Account</Typography>
        </Box>
        <Grid
          container
          spacing={2}
          component="form"
          sx={{
            mt: 3,
            flexDirection: (theme) =>
              theme.direction === "rtl" ? "row-reverse" : "row",
          }}
          onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}
        >
          <FormBuilder fields={fields} />

          <Grid size={{ xs: 12 }}>
            <ButtonWithLoading
              isLoading={isPending}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disableElevation
              size="large"
            >
              register
            </ButtonWithLoading>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography>
              already Have An Account
              <Link href="/sign-in">login</Link>
            </Typography>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default SignUp;
