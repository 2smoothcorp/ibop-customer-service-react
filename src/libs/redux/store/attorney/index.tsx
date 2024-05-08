import { AttorneyInfoModel } from '@/services/rest-api/customer-service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AttorneyState {
    data: Array<AttorneyInfoModel>
}

const initialState: AttorneyState = {
    data: []
}

export const AttorneySlice = createSlice({
    name: 'Attorney',
    initialState,
    reducers: {
        setAttorneyData: (state, action: PayloadAction<Array<AttorneyInfoModel>>) => {
            state.data = action.payload
        }
    }
})

export const {
    setAttorneyData
} = AttorneySlice.actions;

export default AttorneySlice.reducer