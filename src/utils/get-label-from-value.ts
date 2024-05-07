/**
 *  Utilities - Get Label From Value
 */

import type { FormInternalTypeDef } from '@/components/form';

export const getSingleLabelFromValue = <DynamicType extends FormInternalTypeDef.InputChoiceItem>(input: ExtractLabelFromStringValueInput<DynamicType>): string => {
  const { datasource, searchValue } = input;
  const item = datasource.find((filter) => filter.value === searchValue);
  if(!item) { return '-'; }
  return item.label || '-';
}

export const getAggregateLabelFromValue = <DynamicType extends FormInternalTypeDef.InputChoiceItem>(input: ExtractLabelFromArrayStringValueInput<DynamicType>): string => {
  const { datasource, searchValue } = input;
  const items = datasource.filter((filter) => searchValue.includes(filter.value));
  const aggregated = items.map((item) => item.label);
  return aggregated.join(', ');
}

interface ExtractLabelFromStringValueInput<DynamicType extends {}> {
  datasource: Array<DynamicType>;
  searchValue: string;
}

interface ExtractLabelFromArrayStringValueInput<DynamicType extends {}> {
  datasource: Array<DynamicType>;
  searchValue: Array<string>;
}