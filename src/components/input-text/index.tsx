/**
 *  Component - Input Text
 */

'use client'

import {
  type ReactElement,
  useEffect,
  useState
} from 'react';
import type { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

import styles from './styles.module.css';

export const InputText = ({ name, disabled, register }: InputTextProps): ReactElement => {
  useEffect(() => {}, []);

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    if(!register) { return; }
    return register(name);
  }

  return (
    <input
      type={'text'}
      className={ styles['text-input'] }
      disabled={ disabled }
      { ...(registerHookForm() || {}) }
    />
  );
}

interface InputTextProps {
  name: string;
  value?: string;
  disabled?: boolean;
  register?: UseFormRegister<any>;
}