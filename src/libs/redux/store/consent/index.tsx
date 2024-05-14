import { ConsentInfoRequest } from '@/services/rest-api/customer-service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ConsentState {
    data: ConsentInfoRequest
}

const initialState: ConsentState = {
    data: {}
}

export const ConsentSlice = createSlice({
    name: 'Consent-infomation',
    initialState,
    reducers: {
        setConsentData: (state, action: PayloadAction<ConsentInfoRequest>) => {
            state.data = { ...action.payload }
        }
    }
})

export const {
    setConsentData
} = ConsentSlice.actions;

export default ConsentSlice.reducer