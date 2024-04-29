/**
 *  Component - Input Radio
 */

'use client'

import { type ReactElement, useEffect } from 'react';
import {
  type RadioGroupProps,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@mui/material';
import type { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

export const InputRadio = (props: InputRadioProps): ReactElement => {
  useEffect(() => {}, []);

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register } = props;
    if(!register) { return; }
    return register(name);
  }

  const generateRadio = (): Array<ReactElement> => {
    const { options } = props;
    return options.map(({ label, value, disabled }, idx) => {
      return (
        <FormControlLabel
          key={`radio-item-${ idx }`}
          control={<Radio disabled={ disabled } />}
          label={ label }
          value={ value }
        />
      );
    });
  }

  return (
    <RadioGroup { ...props } { ...(registerHookForm() || {}) }>
      { generateRadio() }
    </RadioGroup>
  );
}

type InputRadioProps = RadioGroupProps & {
  name: string;
  options: Array<{ label: string; value: string; disabled?: boolean; }>;
  register?: UseFormRegister<any>;
}