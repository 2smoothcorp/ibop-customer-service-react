/**
 *  Component - Input Checkbox
 */

'use client'

import { type ReactElement, Fragment, useEffect } from 'react';
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

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register, registerOption } = props;
    if(!register) { return; }
    if(registerOption) { return register(name, registerOption); }
    return register(name);
  }

  const generateCheckbox = (): Array<ReactElement> => {
    const { options } = props;
    return options.map(({ label, value, disabled }, idx) => {
      return (
        <Grid item key={`checkbox-item-${ idx }`}>
          <FormControlLabel
            control={<Checkbox disabled={ disabled } { ...(registerHookForm() || {}) } />}
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
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}