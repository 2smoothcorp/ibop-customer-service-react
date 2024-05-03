import { configureStore } from '@reduxjs/toolkit'
import customerContractSlice from './store/customer-contract-slice'
import customerInformationReducer from './store/customer-information-slice'
import customerProfileSlice from './store/customer-profile-slice'
import { reducerKycCdd } from './store/kyc-cdd';


export const makeStore = () => {
    return configureStore({
        reducer: {
            customerProfile: customerProfileSlice,
            customerInformation: customerInformationReducer,
            customerContractSlice: customerContractSlice,
            kyccdd: reducerKycCdd
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']