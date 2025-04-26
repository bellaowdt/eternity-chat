"use client";

import { Autocomplete, Chip, IconButton, TextField } from "@mui/material";
import { digitsArToEn, digitsFaToEn } from "@persian-tools/persian-tools";
import { FC, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { isAllNumbers } from "@/utils/form";
import useLocalFormContext from "./hooks/useLocalFormContext";
import { MultipleFreeSoloProps } from "./types";
import { PlusOneOutlined } from "@mui/icons-material";
import CustomSkeleton from "../CustomSkeleton";

const MultipleFreeSolo: FC<MultipleFreeSoloProps> = ({
  name,
  size,
  label,
  resetFieldsOnChange = [],
  limitations,
  ...props
}) => {
  const { control, setValue } = useFormContext();
  const [inputValue, setInputValue] = useState("");
  const context = useLocalFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const handleClickOnAdd = () => {
          if (inputValue.trim() === "") return;
          onChange([...(value || []), inputValue.trim()]);
          setInputValue("");
        };
        return (
          <CustomSkeleton isLoading={context?.isLoading}>
            <Autocomplete
              {...props}
              size={size}
              // disableClearable
              multiple
              value={value || []}
              onChange={(_event, value) => {
                const _value = value || [];
                onChange(_value);

                if (resetFieldsOnChange?.length) {
                  resetFieldsOnChange.forEach((key) => {
                    setValue(key, null);
                  });
                }
              }}
              freeSolo
              inputValue={inputValue}
              onInputChange={(_, newInputValue) => {
                if (limitations?.onlyNumbers) {
                  if (isAllNumbers(newInputValue)) {
                    setInputValue(digitsArToEn(digitsFaToEn(newInputValue)));
                  }
                } else {
                  setInputValue(newInputValue);
                }
              }}
              options={[] as string[]}
              renderTags={(value, getTagProps) => {
                return value.map((option, index: number) => {
                  const { key, ...tagProps } = getTagProps({ index });
                  return (
                    <Chip
                      variant="filled"
                      color="primary"
                      label={option}
                      key={key}
                      size="small"
                      {...tagProps}
                    />
                  );
                });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label={label}
                  error={!!error?.message}
                  helperText={error?.message?.toString()}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <IconButton onClick={handleClickOnAdd}>
                        <PlusOneOutlined />
                      </IconButton>
                    ),
                  }}
                />
              )}
            />
          </CustomSkeleton>
        );
      }}
    />
  );
};

export default MultipleFreeSolo;
