/**
 *  Component - Input Number
 */

'use client'

import {
  type ReactElement,
  type ChangeEvent,
  useEffect
} from 'react';
import {
  type NumericFormatProps,
  NumericFormat
} from 'react-number-format';
import type {
  UseFormRegister,
  UseFormRegisterReturn,
  RegisterOptions
} from 'react-hook-form';

import styles from './styles.module.css';

export const InputNumber = (props: InputNumberProps): ReactElement => {
  useEffect(() => {}, []);

  const onChangeText = (evt: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;
    if(!onChange) { return; }
    
    let result = 0;
    const inputValue = evt.target.value || '';
    const parsedValue = Number(inputValue);
    if(!Number.isNaN(parsedValue)) { result = parsedValue; }
    onChange(result);
  }

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register, registerOption } = props;
    if(!register) { return; }
    return register(name, {
      ...(registerOption || {}),
      setValueAs: (val?: string): number => {
        if(!val) { return 0; }
        if(!val.replaceAll) { return 0; }
        
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

      { ...(registerHookForm() || { onChange: onChangeText }) }
      getInputRef={ registerHookForm()?.ref }
    />
  );
}

type InputNumberProps = NumericFormatProps & {
  name: string;
  onChange?: (value: number) => void;
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}