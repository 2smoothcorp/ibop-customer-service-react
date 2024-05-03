/**
 *  Component - Section Separator
 */

'use client'

import {
  type ReactElement,
  useEffect
} from 'react';
import { Button } from '@mui/material';

export const SectionSeparator = (props: SectionSeparatorProps): ReactElement => {
  useEffect(() => {}, []);

  const onClickEditAction = () => {
    const { onClickEdit } = props;
    if(onClickEdit) { onClickEdit(); }
  }

  return (
    <div className={'relative my-4 border-b-2 border-b-slate-500'}>
      <strong className={'text-xl text-success-500'}>{ props.title }</strong>
      {
        (props.hasEditAction) && (
          <div className={'absolute top-[-0.5rem] right-2'}>
            <Button
              variant={'contained'}
              color={'secondary'}
              className={'text-xl text-white py-0 w-25'}
              onClick={ onClickEditAction }
            >
              แก้ไข
            </Button>
          </div>
        )
      }
    </div>
  );
}

interface SectionSeparatorProps {
  title: string;
  hasEditAction?: boolean;
  onClickEdit?: () => void;
}