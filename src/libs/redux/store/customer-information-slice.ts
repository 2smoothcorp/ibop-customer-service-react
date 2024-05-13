import { AddressInfoModel, OccupationInfoModel, PersonalInfoModel, PoliticRelationInfoModel, SpouseInfoModel } from '@/services/rest-api/customer-service';
import { AddressThailandResultProps, mergeDeep } from '@/utils/function';
import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { Dayjs } from 'dayjs';

// Define a type for the slice state
export interface CustomerInformationState {
    personalInfo: PersonalInfo,
    spouseInfo: SpouseInfo,
    addressInfoType1: AddressInfo,
    addressInfoType2: AddressInfo,
    occupationInfo: OccupationInfoModel,
    addressInfoType3: AddressInfo,
    politicRelationInfo: PoliticRelationInfo,
    confirm: PersonalConfirm | null,
    isAddressInfoType2SameType: string,
    isAddressInfoType3SameType: string,
}

export interface PersonalConfirm {
    personalInfo?: PersonalInfoModel,
    spouseInfo?: SpouseInfoModel,
    addressInfoType1?: AddressInfoModel,
    addressInfoType2?: AddressInfoModel,
    occupationInfo?: OccupationInfoModel,
    addressInfoType3?: AddressInfoModel,
    politicRelationInfo?: PoliticRelationInfoModel,
    isAddressInfoType2SameType?: string,
    isAddressInfoType3SameType?: string,
}

interface PersonalInfo extends PersonalInfoModel {
    personType?: string;
    identityExpireDateDayjs?: Dayjs | null;
    birthDateDayjs?: Dayjs | null;
    riskGroup?: string;
    country?: string;
    nation?: string;
    title?: string;
    identityNeverExpireShow?: string;
}

interface SpouseInfo {
    familyStatus: string;
    spouseReferenceType: string;
    spouseIdentityId: string;
    spouseTitleCode: string;
    spouseFirstName: string;
    spouseLastName: string;
}

interface AddressInfo extends AddressInfoModel {
    addressTemp: AddressThailandResultProps | null;
    addressType: '01' | '02' | '03' | '04',
    country: string;
    // addressNo: string;
    // moo: string;
    // buildingOrVillage: string;
    // roomNo: string;
    // floor: string;
    // soi: string;
    // street: string;
    // country: string;
    // countryCode: string;
    // zipCode: string;
    // provinceCode: string;
    // districtCode: string;
    // subDistrictCode: string;
    // customAddress1: string;
    // customAddress2: string;
    // customAddress3: string;
}

interface PoliticRelationInfo extends PoliticRelationInfoModel {
    politicianRelationString: string;
}

// Define the initial state using that type
const initialState: CustomerInformationState = {
    personalInfo: {
        personType: '',
        personTypeCode: '',
        referenceTypeDesc: '',
        referenceType: '',
        referenceID: '',
        riskGroup: '',
        country: '',
        countryCode: '000',
        nation: '',
        nationalityCode: '',
        identityExpireDateDayjs: null,
        identityExpireDate: '',
        title: '',
        titleCode: '',
        gender: '',
        genderCode: '',
        firstNameTh: '',
        lastNameTh: '',
        firstNameEn: '',
        lastNameEn: '',
        birthDateDayjs: null,
        birthDate: '',
        identityNeverExpireShow: '',
        identityNeverExpire: false,
    },
    spouseInfo: {
        familyStatus: '',
        spouseReferenceType: '',
        spouseIdentityId: '',
        spouseTitleCode: '',
        spouseFirstName: '',
        spouseLastName: '',
    },
    addressInfoType1: {
        addressTemp: null,
        addressType: '01',
        addressNo: '',
        moo: '',
        buildingOrVillage: '',
        roomNo: '',
        floor: '',
        soi: '',
        street: '',
        country: '',
        countryCode: '000',
        zipCode: '',
        provinceCode: '',
        districtCode: '',
        subDistrictCode: '',
        customAddress1: '',
        customAddress2: '',
        customAddress3: '',

    },
    addressInfoType2: {
        addressTemp: null,
        addressType: '01',
        addressNo: '',
        moo: '',
        buildingOrVillage: '',
        roomNo: '',
        floor: '',
        soi: '',
        street: '',
        country: '',
        countryCode: '000',
        zipCode: '',
        provinceCode: '',
        districtCode: '',
        subDistrictCode: '',
        customAddress1: '',
        customAddress2: '',
        customAddress3: '',
    },
    occupationInfo: {
        occupationCode: '',
        occupationDescOther: '',
        jobWorkPlace: '',
        jobPosition: '',
        jobDepartment: '',
    },
    addressInfoType3: {
        addressTemp: null,
        addressType: '01',
        addressNo: '',
        moo: '',
        buildingOrVillage: '',
        roomNo: '',
        floor: '',
        soi: '',
        street: '',
        country: '',
        countryCode: '000',
        zipCode: '',
        provinceCode: '',
        districtCode: '',
        subDistrictCode: '',
        customAddress1: '',
        customAddress2: '',
        customAddress3: '',
    },
    politicRelationInfo: {
        politicianRelationString: "false",
        politicianRelation: false,
        politicianPosition: '',
    },
    confirm: null,
    isAddressInfoType2SameType: '0',
    isAddressInfoType3SameType: '0',
}

export const customerInformationSlice = createSlice({
    name: 'customer-information',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setDataCustomerInformation: (state, action: PayloadAction<CustomerInformationState>) => {
            const { personalInfo, spouseInfo, addressInfoType1, addressInfoType2, occupationInfo, politicRelationInfo } = action.payload
            state.personalInfo = personalInfo
            state.spouseInfo = spouseInfo
            state.addressInfoType1 = addressInfoType1
            state.addressInfoType2 = addressInfoType2
            state.occupationInfo = occupationInfo
            state.politicRelationInfo = politicRelationInfo
        },
        setDataPersonalConfirm: (state, action: PayloadAction<PersonalConfirm | null>) => {
            if (!action.payload) {
                state.confirm = null
            } else {
                if (state.confirm) {
                    let oldData = current(state.confirm)
                    state.confirm = mergeDeep({}, oldData, action.payload)
                } else {
                    state.confirm = action.payload
                }
            }
        }
    }
})

export const {
    setDataCustomerInformation,
    setDataPersonalConfirm,
} = customerInformationSlice.actions

export default customerInformationSlice.reducer