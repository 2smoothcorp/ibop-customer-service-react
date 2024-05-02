import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface CusomterInformationState {
    personalInfo: PersonalInfo,
    spouseInfo: SpouseInfo,
    addressByType: AddressInfo,
    addressBycurrent: AddressInfo,
    occupationInfo: OccupationInfo,
    politicRelationInfo: PoliticRelationInfo,
}

interface PersonalInfo {
    personType: string;
    personTypeCode: string;
    referenceTypeDesc: string;
    referenceType: string;
    referenceID: string;
    riskGroup: string;
    country: string;
    countryCode: string;
    nation: string;
    nationalityCode: string;
    identityExpireDate: string;
    title: string;
    titleCode: string;
    gender: string;
    genderCode: string;
    firstNameTh: string;
    lastNameTh: string;
    firstNameEn: string;
    lastNameEn: string;
    birthDate: string;
    identityNeverExpireShow: string;
    identityNeverExpire: boolean;
}

interface SpouseInfo {
    familyStatus: string;
    spouseReferenceType: string;
    spouseIdentityId: string;
    spouseTitleCode: string;
    spouseFirstName: string;
    spouseLastName: string;
}

interface AddressInfo {
    addressNo: string;
    moo: string;
    buildingOrVillage: string;
    roomNo: string;
    floor: string;
    soi: string;
    street: string;
    country: string;
    countryCode: string;
    zipCode: string;
    provinceCode: string;
    districtCode: string;
    subDistrictCode: string;
    customAddress1: string;
    customAddress2: string;
    customAddress3: string;
}

interface OccupationInfo {
    address: AddressInfo,
    occupation: {
        occupationCode: string;
        occupation: string;
        jobWorkPlace: string;
        jobPosition: string;
        jobDepartment: string;
    }
}

interface PoliticRelationInfo {
    politicianRelationString: string;
    politicianRelation: boolean;
    politicianPosition: string;
}

// Define the initial state using that type
const initialState: CusomterInformationState = {
    personalInfo: {
        personType: '',
        personTypeCode: '',
        referenceTypeDesc: '',
        referenceType: '',
        referenceID: '',
        riskGroup: '',
        country: '',
        countryCode: '',
        nation: '',
        nationalityCode: '',
        identityExpireDate: '',
        title: '',
        titleCode: '',
        gender: '',
        genderCode: '',
        firstNameTh: '',
        lastNameTh: '',
        firstNameEn: '',
        lastNameEn: '',
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
    addressByType: {
        addressNo: '',
        moo: '',
        buildingOrVillage: '',
        roomNo: '',
        floor: '',
        soi: '',
        street: '',
        country: '',
        countryCode: '',
        zipCode: '',
        provinceCode: '',
        districtCode: '',
        subDistrictCode: '',
        customAddress1: '',
        customAddress2: '',
        customAddress3: '',
    },
    addressBycurrent: {
        addressNo: '',
        moo: '',
        buildingOrVillage: '',
        roomNo: '',
        floor: '',
        soi: '',
        street: '',
        country: '',
        countryCode: '',
        zipCode: '',
        provinceCode: '',
        districtCode: '',
        subDistrictCode: '',
        customAddress1: '',
        customAddress2: '',
        customAddress3: '',
    },
    occupationInfo: {
        address: {
            addressNo: '',
            moo: '',
            buildingOrVillage: '',
            roomNo: '',
            floor: '',
            soi: '',
            street: '',
            country: '',
            countryCode: '',
            zipCode: '',
            provinceCode: '',
            districtCode: '',
            subDistrictCode: '',
            customAddress1: '',
            customAddress2: '',
            customAddress3: '',
        },
        occupation: {
            occupationCode: '',
            occupation: '',
            jobWorkPlace: '',
            jobPosition: '',
            jobDepartment: '',
        }
    },
    politicRelationInfo: {
        politicianRelationString: "false",
        politicianRelation: false,
        politicianPosition: '',
    },
}

export const customerInfoSlice = createSlice({
    name: 'customer-information',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setDataCustomerInformation: (state, action: PayloadAction<CusomterInformationState>) => {
            state = action.payload
        }
    }
})

export const {
    setDataCustomerInformation
} = customerInfoSlice.actions

export default customerInfoSlice.reducer