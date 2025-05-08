import { Box, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomSkeleton from '../../CustomSkeleton';
import { DEFAULT_FORBIDDEN_CHARS } from '../constants/defaults';
import useLocalFormContext from '../hooks/useLocalFormContext';
import { CustomTextFieldProps } from '../types';
import ClearButtonAdornment from './ClearButtonAdornment';

const CustomTextField: FC<CustomTextFieldProps> = ({
  fullWidth = true,
  size = 'small',
  ControllerProps = {},
  forbiddenChars = DEFAULT_FORBIDDEN_CHARS,
  label,
  ...props
}) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const { isLoading } = useLocalFormContext();

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (['+', '-'].includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <Controller
      name={props.name}
      control={control}
      {...ControllerProps}
      render={({ field: { value, onChange } }) => {
        const _onChange = (event) => {
          let isValid = true;
          if (props.type?.toLowerCase() === 'number') {
            let _value = event.target.value;
            isValid =
              _value >= (props.limitations?.min || -Infinity) &&
              _value <= (props.limitations?.max || Infinity) &&
              !forbiddenChars?.includes(_value.toString());

            if (isValid) {
              _value = +_value;
            }
          } else if (
            ['password', 'text', 'string', undefined].includes(props.type)
          ) {
            const _value = event.target.value;
            isValid =
              _value.length <= (props.limitations?.maxLength || Infinity) &&
              _value.length >= (props.limitations?.minLength || -Infinity);
          }

          if (isValid) {
            onChange(event);
          }
        };

        return (
          <CustomSkeleton isLoading={isLoading}>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Separate label on top */}
              {label && (
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 500, fontSize: 14 }}
                >
                  {label}
                </Typography>
              )}

              {/* TextField itself */}
              <TextField
                {...props}
                fullWidth={fullWidth}
                size={size}
                onKeyDown={
                  props.type?.toLowerCase() === 'number' ? onKeyDown : undefined
                }
                value={value ?? ''}
                onChange={_onChange}
                error={!!errors[props.name]}
                helperText={errors[props.name]?.message?.toString()}
                FormHelperTextProps={{
                  sx: {
                    m: 0,
                    mt: 1,
                  },
                }}
                inputProps={{
                  ...props.inputProps,
                  onAnimationStart: (e) => {
                    if (e.animationName === 'mui-auto-fill') {
                      setValue(props.name, value || ' ');
                    }
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <>
                      {!props.disabled && value && (
                        <ClearButtonAdornment onChange={onChange} />
                      )}
                      {props.InputProps?.endAdornment}
                    </>
                  ),
                }}
              />
            </Box>
          </CustomSkeleton>
        );
      }}
    />
  );
};

export default CustomTextField;
