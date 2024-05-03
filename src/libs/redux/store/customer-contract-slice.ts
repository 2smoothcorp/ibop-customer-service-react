import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface CustomerContractState {
    contractInformation: ContractInformation,
    contractEmergency: ContractEmergency[],
}

interface ContractInformation {
    docReceiveChannel: string;
    docReceiveAddressType: string;
    addressNo: string;
    moo: string;
    buildingOrVillage: string;
    roomNo: string;
    floor: string;
    soi: string;
    street: string;
    countryCode: string;
    country: string;
    zipCode: string;
    province: string;
    provinceCode: string;
    district: string;
    districtCode: string;
    subDistrict: string;
    subDistrictCode: string;
    mobileNo: string;
    officeNo: string;
    email: string;
    customAddress1: string;
    customAddress2: string;
    customAddress3: string;
}

interface ContractEmergency {
    emergencyContactId: number;
    name: string;
    mobile: string;
    relationship: string;
}

// Define the initial state using that type
const initialState: CustomerContractState = {
    contractInformation: {
        docReceiveChannel: "",
        docReceiveAddressType: "01",
        addressNo: "",
        moo: "",
        buildingOrVillage: "",
        roomNo: "",
        floor: "",
        soi: "",
        street: "",
        countryCode: "000",
        country: "",
        zipCode: "",
        province: "",
        provinceCode: "",
        district: "",
        districtCode: "",
        subDistrict: "",
        subDistrictCode: "",
        mobileNo: "",
        officeNo: "",
        email: "",
        customAddress1: "",
        customAddress2: "",
        customAddress3: "",
    },
    contractEmergency: [
        {
            emergencyContactId: -1,
            name: "",
            mobile: "",
            relationship: "",
        },
        {
            emergencyContactId: -1,
            name: "",
            mobile: "",
            relationship: "",
        },
        {
            emergencyContactId: -1,
            name: "",
            mobile: "",
            relationship: "",
        },
    ],
}

export const customerContractSlice = createSlice({
    name: 'customer-contract',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setDataCustomerContract(state, action: PayloadAction<CustomerContractState>) {
            const { contractInformation, contractEmergency } = action.payload
            state.contractInformation = contractInformation
            state.contractEmergency = contractEmergency
        }
    }
})

export const { setDataCustomerContract } = customerContractSlice.actions

export default customerContractSlice.reducer