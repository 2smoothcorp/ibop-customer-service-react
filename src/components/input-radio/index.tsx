/**
 *  Component - Input Radio
 */

'use client'

import { type ReactElement, Fragment, useEffect } from 'react';
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
  const {
    name, options, errorMessage, loading, onSelectOption, register, registerOption,
    ...radioGroupProps
  } = props;

  useEffect(() => {}, []);

  const onChangeSelection = (_: any, selected: string) => {
    const { onSelectOption } = props;
    if(!onSelectOption) { return; }
    
    onSelectOption(selected);
  }

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register, registerOption } = props;
    if(!register) { return; }
    if(registerOption) { return register(name, registerOption); }
    return register(name);
  }

  const generateRadio = (): Array<ReactElement> => {
    const { options, errorMessage } = props;
    return options.map(({ label, value, disabled }, idx) => {
      return (
        <FormControlLabel
          key={`radio-item-${ idx }`}
          control={(
            <Radio
              disabled={ disabled }
              color={ (errorMessage) ? 'error' : undefined }
            />
          )}
          label={ label }
          value={ value }
        />
      );
    });
  }

  return (
    <Fragment>
      <RadioGroup { ...radioGroupProps } { ...(registerHookForm() || { onChange: onChangeSelection }) }>
        { generateRadio() }
      </RadioGroup>
      { (props.errorMessage) && (<div className={'text-danger-500'}>{ props.errorMessage }</div>) }
    </Fragment>
  );
}

type InputRadioProps = RadioGroupProps & {
  name: string;
  options: Array<{ label: string; value: string; disabled?: boolean; }>;
  errorMessage?: string;
  loading?: boolean;
  onSelectOption?: (selected: string) => void;
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}