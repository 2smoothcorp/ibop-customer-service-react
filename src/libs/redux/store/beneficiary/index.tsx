import { BeneficiaryInfoModel, BeneficiaryInfoRequest } from '@/services/rest-api/customer-service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface BeneficiaryState {
    data: BeneficiaryInfoRequest
}

const initialState: BeneficiaryState = {
    data: {}
}

export const beneficiarySlice = createSlice({
    name: 'beneficiary-infomation',
    initialState,
    reducers: {
        setBeneficiaryData: (state, action: PayloadAction<BeneficiaryInfoModel>) => {
            state.data = { ...action.payload }
        }
    }
})

export const {
    setBeneficiaryData
} = beneficiarySlice.actions;

export default beneficiarySlice.reducer