import { configureStore } from '@reduxjs/toolkit';
import attorneySlice from './store/attorney';
import beneficiarySlice from './store/beneficiary';
import customerAtsEDividendSlice from './store/customer-ats-e-dividend-slice';
import customerContractSlice from './store/customer-contract-slice';
import customerFatcaSlice from './store/customer-fatca-slice';
import customerInformationSlice from './store/customer-information-slice';
import customerProfileSlice from './store/customer-profile-slice';
import financialInfomationSlice from './store/financial-infomation';
import { reducerKycCdd } from './store/kyc-cdd';

export const makeStore = () => {
    return configureStore({
        reducer: {
            customerProfile: customerProfileSlice,
            customerInformation: customerInformationSlice,
            customerContract: customerContractSlice,
            customerAtsEDividend: customerAtsEDividendSlice,
            cusomterFatca: customerFatcaSlice,
            kyccdd: reducerKycCdd,
            financialInfomation: financialInfomationSlice,
            beneficiary: beneficiarySlice,
            attorney: attorneySlice
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']