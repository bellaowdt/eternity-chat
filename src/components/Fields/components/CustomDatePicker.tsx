import { DatePicker } from '@mui/x-date-pickers';
import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { ICustomDatePicker } from '../types';
import ClearButtonAdornment from './ClearButtonAdornment';
import { Box, Typography } from '@mui/material';

const CustomDatePicker: FC<ICustomDatePicker> = ({
  name,
  label,
  variant = 'outlined',
  valueFormatter,
  format = 'yyyy/MM/dd',
  labelVariant = 'subtitle1',
  boldLabel = false,
  ...props
}) => {
  const { control } = useFormContext();
  const {
    field,
    formState: { errors },
  } = useController({ name, control });

  const handleChange = (date: any) => {
    let value = date;
    if (valueFormatter) {
      value = valueFormatter(value);
    }

    field.onChange(value);
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {label && (
        <Typography
          variant={props?.props?.labelVariant}
          mb={1}
          fontWeight={props?.props?.boldLabel ? 'bold' : 'normal'}
        >
          {label}
        </Typography>
      )}

      <DatePicker
        format={format}
        {...props}
        // label={label}
        value={(field.value as unknown as never) || ''}
        onChange={handleChange}
        onSelectedSectionsChange={() => {}}
        closeOnSelect={true}
        slotProps={{
          textField: () => ({
            helperText: errors[name]?.message?.toString(),
            error: !!errors[name],
            fullWidth: true,
            variant: props?.props?.variant,
            size: 'small',
            InputProps: {
              startAdornment: (
                <>
                  {field.value && (
                    <ClearButtonAdornment onChange={field.onChange} />
                  )}
                </>
              ),
              sx: { ...props?.props?.sx },
            },
          }),
        }}
      />
    </Box>
  );
};

export default CustomDatePicker;
