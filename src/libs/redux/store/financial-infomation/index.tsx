import { FinancialInfoModel, FinancialInfoRequest } from '@/services/rest-api/customer-service';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


const initialState: FinancialInfoRequest = {
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
            state.assetValue = action.payload.assetValue
            state.incomeRateCode = action.payload.incomeRateCode
            state.incomeSourceCode = action.payload.incomeSourceCode
            state.incomeSourceOther = action.payload.incomeSourceOther
            state.investmentFundCode = action.payload.investmentFundCode
            state.investmentPurposeCode = action.payload.investmentPurposeCode
            state.investmentPurposeOther = action.payload.investmentPurposeOther
            state.investmentYear = action.payload.investmentYear
        }
    }
})

export const {
    setFinancialInfoData
} = financialInfomationSlice.actions;

export default financialInfomationSlice.reducer