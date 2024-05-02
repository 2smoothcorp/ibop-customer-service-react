import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface CusomterContractState {
    contractInformation: object,
    contractEmergency: object,
}

// Define the initial state using that type
const initialState: CusomterContractState = {
    contractInformation: {},
    contractEmergency: {},
}

export const customerContractSlice = createSlice({
    name: 'customer-contract',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {}
})

export const { } = customerContractSlice.actions

export default customerContractSlice.reducer