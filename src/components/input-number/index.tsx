/**
 *  Component - Input Number
 */

'use client'

import {
  type ReactElement,
  useEffect
} from 'react';
import { type NumericFormatProps, NumericFormat } from 'react-number-format';
import type { UseFormRegister, FieldValues } from 'react-hook-form';

import styles from './styles.module.css';

export const InputNumber = (props: InputNumberProps): ReactElement => {
  useEffect(() => {}, []);

  const registerHookForm = () => {
    const { name, register } = props;
    if(!register) { return ({}); }
    return register(name, { valueAsNumber: true });
  }

  return (
    <NumericFormat
      decimalScale={0}
      decimalSeparator={'.'}
      thousandSeparator={','}
      inputMode={'numeric'}
      { ...props }

      className={[  styles['number-input'], props.className ].join(' ')}

      { ...registerHookForm() }
    />
  );
}

type InputNumberProps = NumericFormatProps & {
  name: string;
  register?: UseFormRegister<FieldValues>;
}