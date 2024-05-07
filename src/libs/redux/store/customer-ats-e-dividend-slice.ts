import { BankInfoModel } from "@/services/rest-api/customer-service";
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// Define a type for the slice state
export interface CustomerAtsEDividendState {
    ats: BankInfoModel[],
    idRowsMainAts: number,
    eDividend: BankInfoModel[],
    idRowsMainEDividend: number,
}

// Define the initial state using that type
const initialState: CustomerAtsEDividendState = {
    ats: [],
    idRowsMainAts: -1,
    eDividend: [],
    idRowsMainEDividend: -1,
}

export const customerAtsEDividendSlice = createSlice({
    name: 'customer-ats-e-devidend',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setMainIdCustomerAts: (state, action: PayloadAction<number>) => {
            state.idRowsMainAts = action.payload
        },
        setDataCustomerAts(state, action: PayloadAction<BankInfoModel[]>) {
            state.ats = action.payload
        },
        setMainIdCustomerEDividend: (state, action: PayloadAction<number>) => {
            state.idRowsMainEDividend = action.payload
        },
        setDataCustomerEDividend(state, action: PayloadAction<BankInfoModel[]>) {
            state.eDividend = action.payload
        },
    }
})

export const { setDataCustomerAts, setDataCustomerEDividend, setMainIdCustomerAts, setMainIdCustomerEDividend } = customerAtsEDividendSlice.actions

export default customerAtsEDividendSlice.reducer