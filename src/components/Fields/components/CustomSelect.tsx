"use client";

import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";
import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import CustomSkeleton from "../../CustomSkeleton";
import useLocalFormContext from "../hooks/useLocalFormContext";
import { CustomSelectProps, Option } from "../types";
import ClearButtonAdornment from "./ClearButtonAdornment";

const CustomSelect: FC<CustomSelectProps> = ({
  options = [],
  name = "",
  size = "small",
  label,
  labelFormatter,
  resetFieldsOnChange = [],
  ...props
}) => {
  const { isLoading } = useLocalFormContext();
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        let normalizedValue: number | number[] | "" = "";
        if (Array.isArray(field.value)) {
          normalizedValue = field.value.map((item: any) =>
            typeof item === "object" ? item.id : item
          );
        } else if (typeof field.value === "object" && field.value?.id) {
          normalizedValue = field.value.id;
        } else if (typeof field.value === "number") {
          normalizedValue = field.value;
        } else {
          normalizedValue = field.value ?? "";
        }

        const handleChange: SelectInputProps<Option>["onChange"] = (event) => {
          props?.onChange?.(event);
          field.onChange(event);

          resetFieldsOnChange.forEach((key) => {
            setValue(key, null);
          });
        };

        return (
          <CustomSkeleton isLoading={isLoading}>
            <FormControl fullWidth error={!!errors[name]} size={size}>
              {/* SEPARATE LABEL */}
              {label && (
                <Typography
                  variant="body2"
                  fontWeight="500"
                  mb={0.5}
                  ml={0.5}
                  color="text.primary"
                >
                  {label}
                </Typography>
              )}

              <Select
                {...props}
                id={`${name}-select`}
                value={normalizedValue}
                onChange={handleChange}
                endAdornment={
                  normalizedValue ? (
                    <ClearButtonAdornment
                      onChange={field.onChange}
                      sx={{ mr: 1.5 }}
                    />
                  ) : undefined
                }
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {labelFormatter ? labelFormatter(option) : option.label}
                  </MenuItem>
                ))}
              </Select>

              {errors[name]?.message && (
                <FormHelperText>
                  {errors[name]?.message?.toString()}
                </FormHelperText>
              )}
            </FormControl>
          </CustomSkeleton>
        );
      }}
    />
  );
};

export default CustomSelect;
