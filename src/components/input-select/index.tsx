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
import type { UseFormRegister, FieldValues } from 'react-hook-form';
import styles from './styles.module.css';

export const InputSelect = (props: InputSelectProps): ReactElement => {
  useEffect(() => {}, []);

  const registerHookForm = () => {
    const { name, register } = props;
    if(!register) { return ({}); }
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
      { ...registerHookForm() }
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
  options: Array<{ label: string; value: string; disabled?: boolean; }>;
  register?: UseFormRegister<FieldValues>;
}