/**
 *  Component - Form
 */

'use client'

import {
  type ReactElement,
  useEffect
} from 'react';
import { Button, Grid } from '@mui/material';

import { InputText } from '@/components/input-text';
import { InputNumber } from '@/components/input-number';
import { InputSelect } from '@/components/input-select';
import { InputRadio } from '@/components/input-radio';
import { InputCheckbox } from '@/components/input-checkbox';

export const Form = (props: FormProps): ReactElement => {
  //

  useEffect(() => {}, []);

  const generateFields = () => {
    const { fields, isEditing } = props;

    return fields.map((item, idx) => {
      const {
        label,
        viewText,
        colSpan = 6, labelCol = 6, viewCol = 6
      } = item;
      return (
        <Grid container item spacing={2}
          key={idx} xs={colSpan}
          // className={'flex items-center gap-x-2'}
        >
          <Grid item
            xs={ labelCol }
            className={['flex items-center', labelCol === 12 ? '' : 'flex justify-end'].join(' ')}
            // style={{ paddingTop: 'unset' }}
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

  const renderInput = (info: InputField): ReactElement => {
    const { inputCol, type, name, value, disabled } = info;
    switch(type) {
      case 'text': {
        const {} = info;
        return (
          <Grid item xs={ inputCol }>
            <InputText name={ name } value={ value } disabled={ disabled } />
          </Grid>
        );
      }
      case 'number': {
        const {} = info;
        return (
          <Grid item xs={ inputCol }>
            <InputNumber name={ name } value={ value } readOnly={ disabled } />
          </Grid>
        );
      }
      case 'select': {
        const { options } = info;
        return (
          <Grid item xs={ inputCol }>
            <InputSelect name={ name } options={ options } value={ value } disabled={ disabled } />
          </Grid>
        );
      }
      case 'radio': {
        const { options } = info;
        return (
          <Grid item xs={ inputCol }>
            <InputRadio row name={ name } options={ options } value={ value } />
          </Grid>
        );
      }
      case 'checkbox': {
        const { options } = info;
        return (
          <Grid item xs={ inputCol }>
            <InputCheckbox name={ name } options={ options } value={ value } disabled={ disabled } />
          </Grid>
        );
      }
    }
  }

  return (
    <form action={ props.action }>
      <Grid container spacing={2}>
        { generateFields() }

        {
          (props.isEditing) && (
            <Grid container className={'mt-4'}>
              <Grid item xs={ 12 }>
                <div className={'flex items-center justify-center gap-x-4'}>
                  <Button type={'reset'}
                    variant={'contained'}
                    className={'bg-neutral-200 hover:bg-neutral-200 hover:brightness-95 text-xl py-0 w-25 h-10 text-black'}
                  >
                    ย้อนกลับ
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

interface FormProps {
  fields: Array<InputField>;
  action?: (formData: FormData) => void;
  isEditing?: boolean;
}

type InputField = TextInputField
  | NumberInputField
  | SelectInputField
  | CheckboxInputField
  | RadioInputField;

interface BaseInputField {
  label: string;
  viewText: string;

  /**
   * Form field grid
   * @defaut 6
   */
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  /**
   * Column span for Label part
   * @defaut 6
   */
  labelCol?: number;

  /**
   * Column span for Text part (view mode)
   * @default 6
   */
  viewCol?: number;

  /**
   * Column span for input part (edit mode)
   * @default 6
   */
  inputCol?: number;

  type?: 'text' | 'number' | 'select' | 'checkbox' | 'radio';
  name?: string;
  value?: string;
  disabled?: boolean;
}

interface WithInputOption { options: Array<{ label: string; value: string; disabled?: boolean; }>; }
interface TextInputField extends BaseInputField { type: 'text'; name: string; }
interface NumberInputField extends BaseInputField { type: 'number'; name: string; }
interface SelectInputField extends BaseInputField, WithInputOption { type: 'select'; name: string; }
interface CheckboxInputField extends BaseInputField, WithInputOption { type: 'checkbox'; name: string; }
interface RadioInputField extends BaseInputField, WithInputOption { type: 'radio'; name: string; }