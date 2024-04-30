/**
 *  Component - Input Select
 */

'use client'

import { type ReactElement, useEffect } from 'react';
import {
  type SelectProps,
  Select,
  MenuItem
} from '@mui/material';
import type {
  UseFormRegister, 
  UseFormRegisterReturn,
  RegisterOptions
} from 'react-hook-form';
import styles from './styles.module.css';

export const InputSelect = (props: InputSelectProps): ReactElement => {
  useEffect(() => {}, []);

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register, registerOption } = props;
    if(!register) { return; }
    if(registerOption) { return register(name, registerOption); }
    return register(name);
  }

  const generateOptions = (): Array<ReactElement> => {
    const { options } = props;
    return options.map(({ label, value, disabled }, idx) => {
      return (
        <MenuItem key={`select-option-${ idx }`} value={ value } disabled={ disabled }>
          { label }
        </MenuItem>
      );
    });
  }

  return (
    <Select
      { ...props }
      className={ styles['select-input'] }
      inputProps={{ 'aria-label': 'Without label' }}
      { ...(registerHookForm() || {}) }
    >
      <MenuItem value={''}>
        -- กรุณาเลือก --
      </MenuItem>
      { generateOptions() }
    </Select>
  );
}

type InputSelectProps = SelectProps<any> & {
  name: string;
  options: Array<SelectOption>;
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}

interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  [key: string]: any;
}