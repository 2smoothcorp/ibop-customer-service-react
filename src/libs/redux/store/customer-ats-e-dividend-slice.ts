import { BankInfoModel } from "@/services/rest-api/customer-service";
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// Define a type for the slice state
export interface CustomerAtsEDividendState {
    ats: BankInfoModel[],
    idRowsMain: number,
    eDividend: BankInfoModel[],
}

// Define the initial state using that type
const initialState: CustomerAtsEDividendState = {
    ats: [],
    idRowsMain: -1,
    eDividend: []
}

export const customerAtsEDividendSlice = createSlice({
    name: 'customer-ats-e-devidend',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setIsMainCustomerAts: (state, action: PayloadAction<number>) => {
            state.idRowsMain = action.payload
        },
        setDataCustomerAts(state, action: PayloadAction<BankInfoModel[]>) {
            state.ats = action.payload
        },
        setDataCustomerEDividend(state, action: PayloadAction<BankInfoModel[]>) {
            state.eDividend = action.payload
        },
    }
})

export const { setDataCustomerAts, setDataCustomerEDividend, setIsMainCustomerAts } = customerAtsEDividendSlice.actions

export default customerAtsEDividendSlice.reducer