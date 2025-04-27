"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";

type FormValues = {
  acceptClubRule: boolean;
};

const CheckClubRulesForm = ({
  onSubmitFunc = () => {},
}: {
  onSubmitFunc?: () => void;
}) => {
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

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
      <Controller
        name="acceptClubRule"
        control={control}
        rules={{ required: "You must accept the Terms of Service" }}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox {...field} checked={!!field.value} color="primary" />
            }
            label="I have read and agree to the Terms of Service"
          />
        )}
      />
      {errors.acceptClubRule && (
        <FormHelperText error>{errors.acceptClubRule.message}</FormHelperText>
      )}
    </Box>
  );
};

export default CheckClubRulesForm;
