import { FinancialInfoModel, FinancialInfoRequest } from '@/services/rest-api/customer-service';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface FinancialInfoState {
    data?: FinancialInfoRequest | null
    confirm?: FinancialInfoRequest | null
}

const initialState: FinancialInfoState = {
    data: null,
    confirm: null
    /*
    assetValue: 0,
    incomeRateCode: '',
    incomeSourceCode: [],
    incomeSourceOther: '',
    investmentFundCode: '',
    investmentPurposeCode: [],
    investmentPurposeOther: '',
    investmentYear: 0
    */
}

export const financialInfomationSlice = createSlice({
    name: 'financial-infomation',
    initialState,
    reducers: {
        setFinancialInfoData: (state, action: PayloadAction<FinancialInfoModel>) => {
            state.data = action.payload
        },
        setConfirmFinancialInfoData: (state, action: PayloadAction<FinancialInfoModel>) => {
            state.confirm = { ...state.confirm, ...action.payload }
        }
    }
})

export const {
    setFinancialInfoData,
    setConfirmFinancialInfoData
} = financialInfomationSlice.actions;

export default financialInfomationSlice.reducer