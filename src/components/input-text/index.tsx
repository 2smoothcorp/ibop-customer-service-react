/**
 *  Component - Input Text
 */

'use client'

import {
  type ReactElement,
  type ChangeEvent,
  useEffect
} from 'react';
import type {
  UseFormRegister,
  UseFormRegisterReturn,
  RegisterOptions
} from 'react-hook-form';

import styles from './styles.module.css';

export const InputText = (props: InputTextProps): ReactElement => {
  useEffect(() => {}, []);

  const onChangeText = (evt: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;
    if(!onChange) { return; }
    
    const inputValue = evt.target.value || '';
    onChange(inputValue);
  }

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register, registerOption } = props;
    if(!register) { return; }
    if(registerOption) { return register(name, registerOption); }
    return register(name);
  }

  return (
    <input
      type={'text'}
      className={ styles['text-input'] }
      defaultValue={ props.defaultValue }
      disabled={ props.disabled }
      { ...(registerHookForm() || { onChange: onChangeText }) }
    />
  );
}

interface InputTextProps {
  name: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (text: string) => void;
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}