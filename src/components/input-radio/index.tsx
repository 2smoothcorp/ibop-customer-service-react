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
import type {
  UseFormRegister,
  UseFormRegisterReturn,
  RegisterOptions
} from 'react-hook-form';

export const InputRadio = (props: InputRadioProps): ReactElement => {
  useEffect(() => {}, []);

  const onChangeSelection = (_: any, selected: string) => {
    const { onSelect } = props;
    if(!onSelect) { return; }
    
    onSelect(selected);
  }

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register, registerOption } = props;
    if(!register) { return; }
    if(registerOption) { return register(name, registerOption); }
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
    <RadioGroup { ...props } { ...(registerHookForm() || { onChange: onChangeSelection }) }>
      { generateRadio() }
    </RadioGroup>
  );
}

type InputRadioProps = RadioGroupProps & {
  name: string;
  options: Array<{ label: string; value: string; disabled?: boolean; }>;
  onSelect?: (selected: string) => void;
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}