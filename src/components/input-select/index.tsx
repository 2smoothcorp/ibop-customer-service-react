/**
 *  Component - Input Select
 */

'use client'

import { type ReactElement, Fragment, useEffect } from 'react';
import {
  type SelectProps,
  type SelectChangeEvent,
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
  const {
    name, options, errorMessage, onSelect, register, registerOption,
    ...selectProps
  } = props;

  useEffect(() => {}, []);

  const onChangeSelection = (evt: SelectChangeEvent) => {
    const { onSelect } = props;
    if(!onSelect) { return; }

    const selected = evt.target.value;
    onSelect(selected);
  }

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
    <Fragment>
      <Select
        { ...selectProps }
        className={[ styles['select-input'], (props.errorMessage) ? styles['select-input-error'] : '' ].join(' ')}
        inputProps={{ 'aria-label': 'Without label' }}
        { ...(registerHookForm() || { onChange: onChangeSelection }) }
      >
        <MenuItem value={''}>
          -- กรุณาเลือก --
        </MenuItem>
        { generateOptions() }
      </Select>
      { (props.errorMessage) && (<div className={'text-danger-500'}>{ props.errorMessage }</div>) }
    </Fragment>
  );
}

type InputSelectProps = SelectProps<any> & {
  name: string;
  options: Array<SelectOption>;
  errorMessage?: string;
  onSelect?: (selected: string) => void;
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}

interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  [key: string]: any;
}