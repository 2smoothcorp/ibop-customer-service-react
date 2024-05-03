/**
 *  Redux Store - Kyc Cdd Type Definition
 */

export module StoreTypeKycCdd {
  export interface SliceData {
    personalInfo: Partial<PersonalInfoFormFields>,
    currentAddrInfo: Partial<AddressFields>,
    workAddrInfo: Partial<AddressFields>,
    spouseInfo: Partial<SpouseFormFields>,
    beneficiaryInfo: Partial<BeneficiaryFormFields>,
    attorneyInfo: Partial<AttorneyFormFields>
  }

  export interface PersonalInfoFormFields {
    titleTh: string;
    firstnameTh: string;
    lastnameTh: string;
    firstnameEn: string;
    lastnameEn: string;
    nationality: string;
    occupation: string;
    incomeRate: string;
    incomeSource: Array<string>;
    incomeCountry: string;
    exp: number;
    investmentPurpose: Array<string>;
  }

  export interface CurrentAddrFormFields extends PrefixedAddressFields<'currentAddr_'> { }
  export interface WorkAddrFormFields extends PrefixedAddressFields<'workAddr_'> { }

  export interface SpouseFormFields {
    maritalStatus: string;
    refType: string;
    refId: string;
    title: string;
    firstname: string;
    lastname: string;
  }

  export interface BeneficiaryFormFields extends PrefixedAddressFields<'beneficiary_'> {
    beneficiaryType: string;
    beneficiary_relationship: string;
    beneficiary_firstname: string;
    beneficiary_lastname: string;
    beneficiary_refType: string;
    beneficiary_refId: string;
  }

  export interface AttorneyFormFields extends PrefixedAddressFields<'attorney_'> {
    attorney_refType: string;
    attorney_refId: string;
    attorney_nationality: string;
    attorney_title: string;
    attorney_fullname: string;
    attorney_relationship: string;
    attorney_mobileNo: string;
  }

  export interface AddressFields {
    addressNo: string;
    moo: string;
    buildingOrVillage: string;
    roomNo: string;
    floor: string;
    soi: string;
    street: string;
    countryCode: string;
    zipCode: string;
    provinceCode: string;
    districtCode: string;
    subDistrictCode: string;
    customAddress1: string;
    customAddress2: string;
    customAddress3: string;
  }

  export type PrefixedAddressFields<P extends string> = {
    [K in keyof AddressFields as `${P}${K}`]: AddressFields[K];
  }
}