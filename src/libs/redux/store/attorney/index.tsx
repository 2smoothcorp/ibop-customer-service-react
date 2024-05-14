import { AttorneyInfoModel } from '@/services/rest-api/customer-service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AttorneyState {
    data: Array<AttorneyInfoModel> | null
    confirm: Array<AttorneyInfoModel> | null
}

const initialState: AttorneyState = {
    data: null,
    confirm: null
}

export const AttorneySlice = createSlice({
    name: 'Attorney',
    initialState,
    reducers: {
        setAttorneyData: (state, action: PayloadAction<Array<AttorneyInfoModel>>) => {
            state.data = action.payload
        },
        setConfirmAttorneyData: (state, action: PayloadAction<Array<AttorneyInfoModel>>) => {
            state.confirm = { ...state.confirm, ...action.payload }
        }
    }
})

export const {
    setAttorneyData,
    setConfirmAttorneyData
} = AttorneySlice.actions;

export default AttorneySlice.reducer