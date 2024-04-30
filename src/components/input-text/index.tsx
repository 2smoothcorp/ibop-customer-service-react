/**
 *  Component - Input Text
 */

'use client'

import {
  type ReactElement,
  useEffect,
  useState
} from 'react';
import type {
  UseFormRegister,
  UseFormRegisterReturn,
  RegisterOptions
} from 'react-hook-form';

import styles from './styles.module.css';

export const InputText = (props: InputTextProps): ReactElement => {
  useEffect(() => {}, []);

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
      disabled={ props.disabled }
      { ...(registerHookForm() || {}) }
    />
  );
}

interface InputTextProps {
  name: string;
  value?: string;
  disabled?: boolean;
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}