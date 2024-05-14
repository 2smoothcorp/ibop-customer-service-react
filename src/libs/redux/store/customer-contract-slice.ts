import { DocReceiveAddressInfoModel, EmergencyContactInfoModel } from '@/services/rest-api/customer-service';
import { AddressThailandResultProps } from '@/utils/function';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface CustomerContractState {
    isAddressInfoType4SameType: string,
    docReceiveAddressInfo: DocReceiveAddressInfo,
    emergencyContactInfo: EmergencyContactInfoModel[],
    confirm: ContractConfirm | null
}

export interface ContractConfirm {
    isAddressInfoType4SameType: string;
    docReceiveAddressInfo?: DocReceiveAddressInfoModel;
    emergencyContactInfo?: EmergencyContactInfoModel[];
}

// Define the initial state using that type
const initialState: CustomerContractState = {
    isAddressInfoType4SameType: '0',
    docReceiveAddressInfo: {
        addressTemp: null,
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
    emergencyContactInfo: [
        {
            emergencyContactId: -1,
            name: "",
            mobile: "",
            relationship: "",
            relationshipCode: "",
            relationshipOther: "",
        },
        {
            emergencyContactId: -1,
            name: "",
            mobile: "",
            relationship: "",
            relationshipCode: "",
            relationshipOther: "",
        },
        {
            emergencyContactId: -1,
            name: "",
            mobile: "",
            relationship: "",
            relationshipCode: "",
            relationshipOther: "",
        },
    ],
    confirm: null
}

export interface DocReceiveAddressInfo extends DocReceiveAddressInfoModel {
    addressTemp: AddressThailandResultProps | null,
    country: string;
    province: string;
    district: string;
    subDistrict: string;
}

export const customerContractSlice = createSlice({
    name: 'customer-contract',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setDataCustomerContract(state, action: PayloadAction<CustomerContractState>) {
            const { docReceiveAddressInfo, emergencyContactInfo } = action.payload
            state.docReceiveAddressInfo = docReceiveAddressInfo
            state.emergencyContactInfo = emergencyContactInfo
        },
        setDataContractConfirm(state, action: PayloadAction<ContractConfirm | null>) {
            if (action.payload) {
                state.confirm = action.payload

            } else {
                state.confirm = null

            }
        }
    }
})

export const { setDataCustomerContract, setDataContractConfirm } = customerContractSlice.actions

export default customerContractSlice.reducer