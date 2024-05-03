/**
 *  Component - Form
 */

'use client'

import {
  type ReactElement,
  type FormEventHandler,
  Fragment,
  useEffect
} from 'react';
import { Button, Grid } from '@mui/material';
import type { UseFormRegister } from 'react-hook-form';

import { InputText } from '@/components/input-text';
import { InputNumber } from '@/components/input-number';
import { InputSelect } from '@/components/input-select';
import { InputRadio } from '@/components/input-radio';
import { InputCheckbox } from '@/components/input-checkbox';
import { InputAutoComplete } from '@/components/input-autocomplete';

export const Form = <DynamicField extends {}>(props: FormProps<DynamicField>): ReactElement => {
  //

  useEffect(() => {}, []);

  const generateFields = () => {
    const { fields, baseColSpan, isEditing } = props;

    return fields.map((item, idx) => {
      const {
        type, disabled,
        label,
        viewText,
        colSpan = baseColSpan || 6, labelCol = 6, viewCol = 6, // inputCol = 6
        isHidden
      } = item;

      // if(type === 'address') {
      //   const { addrInfo, prefixName } = item;
      //   return (
      //     <InputAddress
      //       isEditing={ isEditing }
      //       colSpan={ colSpan }
      //       labelCol={ labelCol }
      //       viewCol={ viewCol }
      //       inputCol={ inputCol }
      //       addrInfo={ addrInfo }
      //       prefixName={ prefixName }
      //       disabled={ disabled }
      //     />
      //   );
      // }

      if(isHidden) { return(<div></div>); }

      return (
        <Grid container item spacing={2}
          key={idx} xs={ colSpan }
          // className={'flex items-center gap-x-2'}
        >
          <Grid item
            xs={ labelCol }
            className={[ 'flex items-center', /* 'mt-2.5', */ (labelCol === 12) ? '' : 'flex justify-end' ].join(' ')}
          >
            <strong>{ label }</strong>
          </Grid>
          
          {
            (isEditing)
            ? (renderInput(item))
            : (<Grid item xs={ viewCol }>{ viewText }</Grid>)
          }
        </Grid>
      );
    });
  }

  const renderInput = (info: FormInternalTypeDef.InputField): ReactElement => {
    const { register } = props;
    const { inputCol = 6, type, name, value, disabled } = info;
    switch(type) {
      case 'text': {
        const {} = info;
        return (
          <Grid item xs={ inputCol }>
            <InputText name={ name } defaultValue={ value } disabled={ disabled } register={ register } />
          </Grid>
        );
      }
      case 'number': {
        const {} = info;
        return (
          <Grid item xs={ inputCol }>
            <InputNumber name={ name } defaultValue={ value } readOnly={ disabled } register={ register } />
          </Grid>
        );
      }
      case 'select': {
        const { options } = info;
        return (
          <Grid item xs={ inputCol }>
            <InputSelect name={ name } options={ options } defaultValue={ value } disabled={ disabled } register={ register } />
          </Grid>
        );
      }
      case 'radio': {
        const { options } = info;
        return (
          <Grid item xs={ inputCol }>
            <InputRadio row name={ name } options={ options } defaultValue={ value } register={ register } />
          </Grid>
        );
      }
      case 'checkbox': {
        const { options } = info;
        return (
          <Grid item xs={ inputCol }>
            <InputCheckbox name={ name } options={ options } defaultValue={ value } disabled={ disabled } register={ register } />
          </Grid>
        );
      }
      case 'autocomplete': {
        const { options, value, optionSearchKey, searchMethod, isAddress, getOptionKey, getOptionLabel, onSearch, onSelect } = info;
        return (
          <Grid item xs={ inputCol }>
            <InputAutoComplete
              isAddress={ isAddress }
              name={ name }
              options={ options }
              selectedOption={ value }
              optionSearchKey={ optionSearchKey }
              searchMethod={ searchMethod }
              disabled={ disabled }
              getOptionKey={ getOptionKey }
              getOptionLabel={ getOptionLabel }
              onSearch={ onSearch }
              onSelect={ onSelect }
              // register={ register }
            />
          </Grid>
        );
      }
    }

    return (
      <Grid item xs={ inputCol }></Grid>
    );
  }

  return (
    <form action={ props.action } onSubmit={ props.onSubmit }>
      <Grid container spacing={2}>
        { generateFields() }

        {
          (props.isEditing) && (
            <Grid container className={'mt-4'}>
              <Grid item xs={ 12 }>
                <div className={'flex items-center justify-center gap-x-4'}>
                  <Button type={'reset'}
                    variant={'contained'}
                    className={'bg-neutral-200 hover:bg-neutral-200 hover:brightness-95 text-xl text-black py-0 w-25 h-10'}
                  >
                    ล้างค่า
                  </Button>
                  <Button type={'submit'} variant={'contained'} className={'text-xl py-0 w-25 h-10'}>
                    บันทึก
                  </Button>
                </div>
              </Grid>
            </Grid>
          )
        }
      </Grid>
    </form>
  );
}

interface FormProps<DynamicField extends {}> {
  fields: Array<FormInternalTypeDef.InputField>;
  isEditing?: boolean;

  /**
   * Form field grid
   * @defaut 6
   */
  baseColSpan?: ColumnSize;

  register?: UseFormRegister<DynamicField>;
  action?: (formData: FormData) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export module FormInternalTypeDef {
  export type InputField = EmptySpaceField
    | TextInputField
    | NumberInputField
    | AutoCompleteInputField
    | SelectInputField
    | CheckboxInputField
    | RadioInputField;

  export interface BaseInputField {
    label: string;
    viewText: string;

    /**
     * Form field grid
     * @defaut 6
     */
    colSpan?: ColumnSize;

    /**
     * Column span for Label part
     * @defaut 6
     */
    labelCol?: ColumnSize;

    /**
     * Column span for Text part (view mode)
     * @default 6
     */
    viewCol?: ColumnSize;

    /**
     * Column span for input part (edit mode)
     * @default 6
     */
    inputCol?: ColumnSize;

    type?: 'text' | 'number' | 'select' | 'checkbox' | 'radio' | 'autocomplete' | 'space';
    name?: string;
    value?: any;

    /** @default false */
    disabled?: boolean;

    /** @default false */
    isHidden?: boolean;
  }

  export interface WithnInputOption {
    options: Array<InputChoiceItem>;
  }

  export interface InputChoiceItem {
    label: string;
    value: string;
    disabled?: boolean;
    [key: string]: any;
  }

  export interface EmptySpaceField extends BaseInputField { type: 'space'; }
  export interface TextInputField extends BaseInputField { type: 'text'; name: string; value?: string; }
  export interface NumberInputField extends BaseInputField { type: 'number'; name: string; value?: number; }
  export interface SelectInputField extends BaseInputField, WithnInputOption { type: 'select'; name: string; value?: string; }
  export interface CheckboxInputField extends BaseInputField, WithnInputOption { type: 'checkbox'; name: string; value?: Array<string>; }
  export interface RadioInputField extends BaseInputField, WithnInputOption { type: 'radio'; name: string; value?: string; }
  export interface AutoCompleteInputField extends BaseInputField, WithnInputOption {
    type: 'autocomplete';
    name: string;
    optionSearchKey?: string;

    /** @default 'startWith' */
    searchMethod?: 'startWith' | 'contain' | 'endWith',

    isAddress?: boolean;
    getOptionKey?: (item: any) => string;
    getOptionLabel?: (item: any) => string;
    onSearch?: (searchText: string) => void;
    onSelect?: (selected: any) => void;
  }
}

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;