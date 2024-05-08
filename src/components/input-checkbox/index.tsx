/**
 *  Component - Input Checkbox
 */

'use client'

import { type ReactElement, Fragment, useEffect } from 'react';
import {
  type CheckboxProps,
  Checkbox,
  FormControlLabel,
  Grid
} from '@mui/material';
import type {
  UseFormRegister,
  UseFormRegisterReturn,
  RegisterOptions
} from 'react-hook-form';

export const InputCheckbox = (props: InputCheckboxProps): ReactElement => {
  useEffect(() => {}, []);

  const onChangeCheck = (_: any, checked: boolean) => {
    const { onTick } = props;
    if(!onTick) { return; }

    onTick(checked);
  }

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register, registerOption } = props;
    if(!register) { return; }
    if(registerOption) { return register(name, registerOption); }
    return register(name);
  }

  const generateCheckbox = (): Array<ReactElement> => {
    const { name, options, errorMessage, onTick, register, registerOption, defaultValue, ...checkboxProps } = props;
    const _regHookForm = registerHookForm();
    return options.map(({ label, value, disabled }, idx) => {
      const _isChecked = (defaultValue) ? (defaultValue as Array<string>).includes(value) : false;
      return (
        <Grid item key={`checkbox-item-${ idx }`}>
          <FormControlLabel
            control={(
              <Checkbox
                defaultChecked={ _isChecked }
                disabled={ disabled }
                color={ (errorMessage) ? 'error' : undefined }
                { ...checkboxProps }
                { ...(_regHookForm || { onChange: onChangeCheck }) }
              />
            )}
            label={ label }
            value={ value }
          />
        </Grid>
      );
    });
  }

  return (
    <Fragment>
      <Grid container spacing={2}>
        { generateCheckbox() }
      </Grid>
      <div className={'text-danger-500'}>{ props.errorMessage }</div>
    </Fragment>
  );
}

type InputCheckboxProps = CheckboxProps & {
  name: string;
  options: Array<{ label: string; value: string; disabled?: boolean; }>;
  errorMessage?: string;
  onTick?: (checked: boolean) => void;
  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}