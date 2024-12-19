import { FormLabel, InputBaseProps, OutlinedInputProps, TextField } from '@mui/material';
import React from 'react';

export function InputText(props: IProps) {
  return (
    <div className={'grid gap-1'}>
      <FormLabel required={props.required}>{props.label}</FormLabel>
      <TextField
        size={'small'}
        type={props.type} // Corrected here
        id={props.id} // Corrected here
        name={props.name} // Corrected here
        onBlur={props.onBlur}
        onChange={props.onChange}
        helperText={props.errorMessage || props.helperText}
        placeholder={props.placeholder} // Corrected here
      />
    </div>
  );
}

interface IProps {
  placeholder?: string;
  name?: string;
  label?: string;
  required?: boolean;
  id?: string;
  errorMessage?: string;
  helperText?: string;
  type?: React.InputHTMLAttributes<unknown>['type'];
  onChange?: OutlinedInputProps['onChange'];
  onBlur?: InputBaseProps['onBlur'];
}
