/**
 *  Component - Input Checkbox
 */

'use client'

import { type ReactElement, useEffect } from 'react';
import {
  type CheckboxProps,
  Checkbox,
  FormControlLabel,
  Grid
} from '@mui/material';
import type {
  UseFormRegister,
  UseFormRegisterReturn,
  RegisterOptions
} from 'react-hook-form';

export const InputCheckbox = (props: InputCheckboxProps): ReactElement => {
  useEffect(() => {}, []);

  const onChangeCheck = (_: any, checked: boolean) => {
    const { onSelect } = props;
    if(!onSelect) { return; }

    onSelect(checked);
  }

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register, registerOption } = props;
    if(!register) { return; }
    if(registerOption) { return register(name, registerOption); }
    return register(name);
  }

  const generateCheckbox = (): Array<ReactElement> => {
    const { options, defaultValue } = props;
    return options.map(({ label, value, disabled }, idx) => {
      const _isChecked = (defaultValue) ? (defaultValue as Array<string>).includes(value) : false;
      return (
        <Grid item key={`checkbox-item-${ idx }`}>
          <FormControlLabel
            control={<Checkbox defaultChecked={ _isChecked } disabled={ disabled } { ...(registerHookForm() || { onChange: onChangeCheck }) } />}
            label={ label }
            value={ value }
          />
        </Grid>
      );
    });
  }

  return (
    <Grid container spacing={2}>
      { generateCheckbox() }
    </Grid>
  );
}

type InputCheckboxProps = CheckboxProps & {
  name: string;
  options: Array<{ label: string; value: string; disabled?: boolean; }>;
  onSelect?: (checked: boolean) => void;
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}