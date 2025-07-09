'use client';

import {
  FormControl,
  FormHelperText,
  Select,
  SelectChangeEvent,
  Typography,
  MenuItem,
  Box,
} from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomSkeleton from '../../common/CustomSkeleton';
import useLocalFormContext from '../hooks/useLocalFormContext';
import { CustomSelectProps } from '../types';
import ClearButtonAdornment from './ClearButtonAdornment';
import { FIXED_SELECT_HEIGHT } from '@/constants/general';

const CustomSelect: FC<CustomSelectProps> = ({
  options = [],
  name = '',
  size = 'small',
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

  // const { sx } = props;
  // console.log(sx);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        let normalizedValue: number | number[] | '' = '';
        if (Array.isArray(field.value)) {
          normalizedValue = field?.value?.map((item) =>
            typeof item === 'object' ? item.id : item,
          );
        } else if (typeof field.value === 'object' && field.value?.id) {
          normalizedValue = field.value.id;
        } else if (typeof field.value === 'number') {
          normalizedValue = field.value;
        } else {
          normalizedValue = field.value ?? '';
        }

        const handleChange = (event: SelectChangeEvent<any>) => {
          props?.onChange?.(event as any);
          field.onChange(event);

          resetFieldsOnChange.forEach((key) => {
            setValue(key, null);
          });
        };

        return (
          <CustomSkeleton isLoading={isLoading}>
            <FormControl fullWidth error={!!errors[name]} size={size}>
              <Box style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {label && (
                  <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                    {label}
                  </Typography>
                )}
                <Select
                  {...props}
                  // inputProps={{
                  //   MenuProps: {
                  //     MenuListProps: {
                  //       sx: {
                  //         backgroundColor: 'red',
                  //       },
                  //     },
                  //   },
                  // }}
                  sx={{
                    height: FIXED_SELECT_HEIGHT,
                  }}
                  id={`${name}-select`}
                  value={normalizedValue}
                  onChange={handleChange}
                  endAdornment={
                    normalizedValue ? (
                      <ClearButtonAdornment
                        onChange={field.onChange}
                        // sx={{ marginRight: 1.5 }}
                      />
                    ) : undefined
                  }
                >
                  {options?.map((option) => (
                    <MenuItem key={option.id} value={option.value as string}>
                      {labelFormatter ? labelFormatter(option) : option.label}
                    </MenuItem>
                  ))}
                </Select>

                {errors[name]?.message && (
                  <FormHelperText>
                    {errors[name]?.message?.toString()}
                  </FormHelperText>
                )}
              </Box>
            </FormControl>
          </CustomSkeleton>
        );
      }}
    />
  );
};

export default CustomSelect;
