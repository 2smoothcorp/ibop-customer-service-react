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
import type { UseFormRegister, FieldErrors } from 'react-hook-form';

import { InputText } from '@/components/input-text';
import { InputNumber } from '@/components/input-number';
import { InputSelect } from '@/components/input-select';
import { InputRadio } from '@/components/input-radio';
import { InputCheckbox } from '@/components/input-checkbox';
import { InputAutoComplete } from '@/components/input-autocomplete';

export const Form = <DynamicField extends {}>(props: FormProps<DynamicField>): ReactElement => {
  useEffect(() => {}, []);

  const generateFields = () => {
    const { fields, baseColSpan, isEditing } = props;

    return fields.map((item, idx) => {
      const {
        type, disabled,
        label,
        viewText,
        colSpan = baseColSpan || 6, labelCol = 6, viewCol = 6, inputCol = 6,
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

      if(isHidden) { return(<div key={`empty-space-${ idx }`}></div>); }

      return (
        <Grid container item spacing={2}
          key={`field-item-${ idx }`} xs={ colSpan }
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
            ? (<Grid item xs={ inputCol }>{ renderInput(item) }</Grid>)
            : (<Grid item xs={ viewCol }>{ viewText }</Grid>)
          }
        </Grid>
      );
    });
  }

  const renderInput = (info: FormInternalTypeDef.InputField<DynamicField>): ReactElement => {
    const { hookForm: { register, errors } } = props;
    const { type, name, value, disabled } = info;
    const errorMsg = (errors) ? `${ errors[name]?.message || '' }` : '';
    switch(type) {
      case 'text': {
        const {} = info;
        return (
          <InputText
            name={ name }
            defaultValue={ value }
            disabled={ disabled }
            register={ register }
            errorMessage={ errorMsg }
          />
        );
      }
      case 'number': {
        const {} = info;
        return (
          <InputNumber
            name={ name }
            defaultValue={ value }
            readOnly={ disabled }
            register={ register }
            errorMessage={ errorMsg }
          />
        );
      }
      case 'select': {
        const { options } = info;
        return (
          <InputSelect
            name={ name }
            options={ options }
            defaultValue={ value }
            disabled={ disabled }
            register={ register }
            errorMessage={ errorMsg }
          />
        );
      }
      case 'radio': {
        const { options, onSelect } = info;
        return (
          <InputRadio row name={ name }
            options={ options }
            defaultValue={ value }
            // register={ register }
            onSelectOption={ onSelect }
            errorMessage={ errorMsg }
          />
        );
      }
      case 'checkbox': {
        const { options } = info;
        return (
          <InputCheckbox
            name={ name }
            options={ options }
            defaultValue={ value }
            disabled={ disabled }
            register={ register }
            errorMessage={ errorMsg }
          />
        );
      }
      case 'autocomplete': {
        const { options, value, optionSearchKey, searchMethod, isAddress, getOptionKey, getOptionLabel, onSearch, onSelect } = info;
        return (
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
            errorMessage={ errorMsg }
          />
        );
      }
    }

    return (<div></div>);
  }

  return (
    <form action={ props.action } onSubmit={ props.onSubmit }>
      <Grid container spacing={2}>
        { generateFields() }

        {
          (props.isEditing) && (
            <Grid container className={'mt-4'}>
              <Grid item xs={ 12 }>
                <div className={'flex items-center justify-end gap-x-4'}>
                  {/* <Button type={'reset'}
                    variant={'contained'}
                    className={'bg-neutral-200 hover:bg-neutral-200 hover:brightness-95 text-xl text-black py-0 w-25 h-10'}
                  >
                    ล้างค่า
                  </Button> */}
                  <Button type={'reset'}
                    variant={'contained'}
                    className={'py-0 w-25 h-10'}
                    color={'error'}
                  >
                    ยกเลิก
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
  fields: Array<FormInternalTypeDef.InputField<DynamicField>>;
  isEditing?: boolean;

  /**
   * Form field grid
   * @defaut 6
   */
  baseColSpan?: ColumnSize;

  hookForm: {
    register?: UseFormRegister<DynamicField>;
    errors?: FieldErrors<DynamicField>;
  },

  action?: (formData: FormData) => void;
  onCancel?: () => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export module FormInternalTypeDef {
  export type InputField<DynamicField> = EmptySpaceField<DynamicField>
    | TextInputField<DynamicField>
    | NumberInputField<DynamicField>
    | AutoCompleteInputField<DynamicField>
    | SelectInputField<DynamicField>
    | CheckboxInputField<DynamicField>
    | RadioInputField<DynamicField>;

  export interface BaseInputField<DynamicField> {
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
    name?: Extract<keyof DynamicField, string>;
    value?: any;

    /** @default false */
    disabled?: boolean;

    /** @default false */
    isHidden?: boolean;
  }

  export interface WithInputOption {
    options: Array<InputChoiceItem>;
  }

  export interface InputChoiceItem {
    label: string;
    value: string;
    disabled?: boolean;
    [key: string]: any;
  }

  export interface EmptySpaceField<DynamicField> extends BaseInputField<DynamicField> { type: 'space'; }
  export interface TextInputField<DynamicField> extends BaseInputField<DynamicField> { type: 'text'; name: Extract<keyof DynamicField, string>; value?: string; }
  export interface NumberInputField<DynamicField> extends BaseInputField<DynamicField> { type: 'number'; name: Extract<keyof DynamicField, string>; value?: number; }
  export interface SelectInputField<DynamicField> extends BaseInputField<DynamicField>, WithInputOption { type: 'select'; name: Extract<keyof DynamicField, string>; value?: string; }
  export interface CheckboxInputField<DynamicField> extends BaseInputField<DynamicField>, WithInputOption { type: 'checkbox'; name: Extract<keyof DynamicField, string>; value?: Array<string>; }

  export interface RadioInputField<DynamicField> extends BaseInputField<DynamicField>, WithInputOption {
    type: 'radio';
    name: Extract<keyof DynamicField, string>;
    value?: string;
    onSelect?: (selected: string) => void;
  }

  export interface AutoCompleteInputField<DynamicField> extends BaseInputField<DynamicField>, WithInputOption {
    type: 'autocomplete';
    name: Extract<keyof DynamicField, string>;
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