/**
 *  Type Definition - API Extension
 */

import type { ComboBox } from '@/services/rest-api/customer-service';

export interface ApiResponse<T>{
  success?: boolean
  message?: string
  reason?: string
  err?: any
  data?: T
}

export type ComboBoxWrapperOption = ComboBox & {
  label: string;
  value: string;
}