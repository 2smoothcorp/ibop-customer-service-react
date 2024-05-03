/**
 *  Redux Store - Kyc Cdd
 */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { StoreTypeKycCdd } from './typed';

const initData: StoreTypeKycCdd.SliceData = {
  personalInfo: {},
  currentAddrInfo: {},
  workAddrInfo: {},
  spouseInfo: {},
  // beneficiaryInfo: {},
  // attorneyInfo: {}
};

const StoreKycCdd = createSlice({
  name: 'store:redux:kyccdd',
  initialState: initData,
  reducers: {
    savePersonalInfo: (state, action: PayloadAction<StoreTypeKycCdd.PersonalInfoFormFields>) => {
      state.personalInfo = action.payload;
    },
    saveCurrentAddressInfo: (state, action: PayloadAction<StoreTypeKycCdd.AddressFields>) => {
      state.currentAddrInfo = action.payload;
    },
    saveWorkAddressInfo: (state, action: PayloadAction<StoreTypeKycCdd.AddressFields>) => {
      state.workAddrInfo = action.payload;
    },
    saveSpouseInfo: (state, action: PayloadAction<StoreTypeKycCdd.SpouseFormFields>) => {
      state.spouseInfo = action.payload;
    },
    // saveBeneficiarryInfo: (state, action: PayloadAction<StoreTypeKycCdd.BeneficiaryFormFields>) => {
    //   state.beneficiaryInfo = action.payload;
    // },
    // saveAttorneyInfo: (state, action: PayloadAction<StoreTypeKycCdd.AttorneyFormFields>) => {
    //   state.attorneyInfo = action.payload;
    // }
  }
})

export * from './typed';
export const reducerKycCdd = StoreKycCdd.reducer;
export const {
  savePersonalInfo,
  saveCurrentAddressInfo,
  saveWorkAddressInfo,
  saveSpouseInfo,
  // saveBeneficiarryInfo,
  // saveAttorneyInfo
} = StoreKycCdd.actions;