import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface CustomerProfileState {
    step: number;
    maxStep: number;
    minStep: number;
}

// Define the initial state using that type
const initialState: CustomerProfileState = {
    step: 1,
    maxStep: 10,
    minStep: 1,
}

export const customerProfileSlice = createSlice({
    name: 'customer-profile',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        nextStep(state) {
            if (state.step < state.maxStep)
                state.step++
        },
        prevStep(state) {
            if (state.step > state.minStep)
                state.step--
        },
        jumpToStep(state, action: PayloadAction<number>) {
            state.step = action.payload
        }
    }
})

export const { nextStep, prevStep, jumpToStep } = customerProfileSlice.actions

export default customerProfileSlice.reducer