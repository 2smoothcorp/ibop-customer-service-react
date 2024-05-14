import { ConsentInfoRequest } from '@/services/rest-api/customer-service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ConsentState {
    data: ConsentInfoRequest | null
    confirm: ConsentInfoRequest | null
}

const initialState: ConsentState = {
    data: null,
    confirm: null
}

export const ConsentSlice = createSlice({
    name: 'Consent-infomation',
    initialState,
    reducers: {
        setConsentData: (state, action: PayloadAction<ConsentInfoRequest>) => {
            state.data = { ...action.payload }
        },
        setConfimConsentData: (state, action: PayloadAction<ConsentInfoRequest>) => {
            state.confirm = { ...state.confirm, ...action.payload }
        }
    }
})

export const {
    setConsentData,
    setConfimConsentData
} = ConsentSlice.actions;

export default ConsentSlice.reducer