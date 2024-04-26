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
import type { UseFormRegister, FieldValues } from 'react-hook-form';

export const InputCheckbox = (props: InputCheckboxProps): ReactElement => {
  useEffect(() => {}, []);

  const registerHookForm = () => {
    const { name, register } = props;
    if(!register) { return ({}); }
    return register(name);
  }

  const generateCheckbox = (): Array<ReactElement> => {
    const { name, options } = props;
    return options.map(({ label, value, disabled }, idx) => {
      return (
        <Grid item key={`checkbox-item-${ idx }`}>
          <FormControlLabel
            control={<Checkbox name={ name } disabled={ disabled } { ...registerHookForm() } />}
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
  register?: UseFormRegister<FieldValues>;
}