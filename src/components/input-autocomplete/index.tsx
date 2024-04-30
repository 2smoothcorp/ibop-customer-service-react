/**
 *  Component - Input AutoComplete
 */

'use client'

import { type ReactElement, useEffect, useState } from 'react';
import {
  Autocomplete,
  TextField
} from '@mui/material';
import type {
  UseFormRegister,
  UseFormRegisterReturn,
  RegisterOptions
} from 'react-hook-form';

export const InputAutoComplete = (props: InputAutocompleteProps): ReactElement => {
  const [ inputOptions, setInputOptions ] = useState<Array<any>>([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {}, [ props.selectedOption ]);

  const registerHookForm = (): UseFormRegisterReturn | undefined => {
    const { name, register, registerOption } = props;
    if(!register) { return; }
    if(registerOption) { return register(name, registerOption); }
    return register(name);
  }

  const onChangeSearchText = (text: string) => {
    const { options, optionSearchKey = 'label', onSearch } = props;
    setIsLoading(true);
    if(!text || text.length < 2) {
      setInputOptions([]);
      setIsLoading(false);
      return;
    }

    const _filtered = options.filter((_f) => _f[optionSearchKey].startsWith(text));
    setInputOptions(_filtered);
    setIsLoading(false);
    if(onSearch) { onSearch(text); }
  }

  const onSelectOption = (selectedOption: any) => {
    const { onSelect } = props;
    if(onSelect) { onSelect(selectedOption); }
  }

  return (
    <Autocomplete disablePortal
      renderInput={(inputProps) => (<TextField { ...inputProps } />)}
      options={ inputOptions }
      value={ props.selectedOption }
      loading={ isLoading }
      disabled={ props.disabled }
      getOptionKey={ props.getOptionKey }
      getOptionLabel={ props.getOptionLabel }
      onInputChange={(_, text) => { onChangeSearchText(text); }}
      renderOption={ (props.mode) ? (liProps, item) => (<li {...liProps}>{ item.label }</li>) : undefined }
      
      { ...(registerHookForm() || { onChange: (_, selected: any) => { onSelectOption(selected); } }) }
    />
  );
}

interface InputAutocompleteProps {
  mode?: 'address';
  name: string;
  options: Array<AutoCompleteOption>;
  selectedOption?: any;
  disabled?: boolean;

  optionSearchKey?: string;
  getOptionKey?: (item: any) => string;
  getOptionLabel?: (item: any) => string;
  onSearch?: (searchText: string) => void;
  onSelect?: (selectedOption: any) => void;

  register?: UseFormRegister<any>;
  registerOption?: RegisterOptions;
}

interface AutoCompleteOption { label: string; value: string; [key: string]: any; }