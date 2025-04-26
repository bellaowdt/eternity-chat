import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomSkeleton from '../../CustomSkeleton';
import useLocalFormContext from '../hooks/useLocalFormContext';
import { CustomSelectProps, Option } from '../types';
import ClearButtonAdornment from './ClearButtonAdornment';

const CustomSelect: FC<CustomSelectProps> = ({
  options = [],
  name = '',
  size,
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
        const labelId = `${field.name}-label`;

        let _value: number | number[] | '' = props.multiple ? [] : '';
        if (field?.value?.[0]?.id) {
          _value = field.value.map(item => item.id);
        } else if (field?.value?.id) {
          _value = field.value.id;
        } else if (typeof field.value === 'number') {
          _value = field.value;
        } else if (Array.isArray(field.value)) {
          _value = field.value;
        } else {
          _value = field.value || '';
        }

        const onChange: SelectInputProps<Option>['onChange'] = (...args) => {
          props?.onChange?.(...args);
          field.onChange(args[0]);

          if (resetFieldsOnChange?.length) {
            resetFieldsOnChange.forEach(key => {
              setValue(key, null);
            });
          }
        };

        return (
          <CustomSkeleton isLoading={isLoading}>
            <FormControl fullWidth error={!!errors[field.name]} size={size}>
              <InputLabel id={labelId}>{props.label}</InputLabel>
              <Select
                {...props}
                endAdornment={
                  _value && (
                    <ClearButtonAdornment
                      onChange={field.onChange}
                      sx={{ mr: 1.5 }}
                    />
                  )
                }
                labelId={labelId}
                id={`${field.name}-select`}
                value={_value}
                onChange={onChange}
              >
                {options.map(option => {
                  return (
                    <MenuItem key={option.id} value={option.value}>
                      {labelFormatter?.(option) || option.label}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>
                {errors[field.name]?.['message']?.toString()}
              </FormHelperText>
            </FormControl>
          </CustomSkeleton>
        );
      }}
    />
  );
};

export default CustomSelect;
