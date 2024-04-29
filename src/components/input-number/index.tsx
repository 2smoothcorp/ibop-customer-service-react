/**
 *  Component - Input Number
 */

'use client'

import {
  type ReactElement,
  useEffect
} from 'react';
import { type NumericFormatProps, NumericFormat } from 'react-number-format';
import type { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

import styles from './styles.module.css';

export const InputNumber = (props: InputNumberProps): ReactElement => {
  useEffect(() => { console.log(props) }, []);

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register } = props;
    if(!register) { return; }
    return register(name, {
      setValueAs: (val?: string): number => {
        if(!val) { return 0; }
        console.log('[InputNumber] SetValueAs -> val', val)

        const formattedString = val.replaceAll(',', '');
        const parsedVal = Number(formattedString);
        if(Number.isNaN(parsedVal)) { return 0; }
        return parsedVal;
      }
    });
  }

  return (
    <NumericFormat
      decimalScale={0}
      decimalSeparator={'.'}
      thousandSeparator={','}
      inputMode={'numeric'}
      { ...props }

      className={[ styles['number-input'], props.className ].join(' ')}

      { ...(registerHookForm() || {}) }
      getInputRef={ registerHookForm()?.ref }
    />
  );
}

type InputNumberProps = NumericFormatProps & {
  name: string;
  register?: UseFormRegister<any>;
}