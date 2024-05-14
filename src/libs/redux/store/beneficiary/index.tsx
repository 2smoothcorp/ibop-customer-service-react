import { BeneficiaryInfoModel, BeneficiaryInfoRequest } from '@/services/rest-api/customer-service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface BeneficiaryState {
    data?: BeneficiaryInfoRequest | null
    confirm?: BeneficiaryInfoRequest | null
}

const initialState: BeneficiaryState = {
    data: null,
    confirm: null
}

export const beneficiarySlice = createSlice({
    name: 'beneficiary-infomation',
    initialState,
    reducers: {
        setBeneficiaryData: (state, action: PayloadAction<BeneficiaryInfoModel>) => {
            state.data = { ...action.payload }
        },
        setConfirmBeneficiaryData: (state, action: PayloadAction<BeneficiaryInfoModel>) => {
            state.data = { ...state.confirm, ...action.payload }
        }
    }
})

export const {
    setBeneficiaryData,
    setConfirmBeneficiaryData
} = beneficiarySlice.actions;

export default beneficiarySlice.reducer