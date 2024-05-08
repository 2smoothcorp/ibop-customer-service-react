/**
 *  Lib - Sweet Alert
 */

import SweetAlert, { type SweetAlertResult } from 'sweetalert2';

export const swal = async (props: SweetAlertInputProps): Promise<SweetAlertResult<any>> => {
  const {
    title, icon,
    description,
    noBackdrop,
    confirmButton, cancelButton, denyButton
  } = props;

  return await SweetAlert.fire({
    titleText: title,
    text: description,
    icon: icon,
    backdrop: !noBackdrop,
    showConfirmButton: (confirmButton?.visible === false) ? false : true,
    showCancelButton: cancelButton?.visible,
    showDenyButton: denyButton?.visible,
    confirmButtonColor: '#11285C',
    cancelButtonColor: '#A0A0A0',
    denyButtonColor: '#F59E0B',
    confirmButtonText: confirmButton?.text || 'ตกลง',
    cancelButtonText: cancelButton?.text || 'ยกเลิก',
    denyButtonText: denyButton?.text || 'ไม่ตกลง',
    // customClass: {
    //   confirmButton: '',
    //   denyButton: '',
    //   cancelButton: ''
    // }
  });
}

interface SweetAlertInputProps {
  title: string;
  description?: string;
  icon: 'warning' | 'error' | 'success' | 'info' | 'question';

  confirmButton?: {
    /** @default 'ตกลง' */
    text?: string;

    /** @default true */
    visible?: boolean;
  },
  cancelButton?: {
    /** @default 'ยกเลิก' */
    text?: string;
    
    visible?: boolean;
  },
  denyButton?: {
    /** @default 'ไม่ตกลง' */
    text?: string;
    
    visible?: boolean;
  },

  noBackdrop?: boolean;
}