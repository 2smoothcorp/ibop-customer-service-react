/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.346
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressInfoOutput } from './AddressInfoOutput';
import {
    AddressInfoOutputFromJSON,
    AddressInfoOutputFromJSONTyped,
    AddressInfoOutputToJSON,
} from './AddressInfoOutput';

/**
 * 
 * @export
 * @interface PersonalOutput
 */
export interface PersonalOutput {
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    personTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    personTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    boAccountRef?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    sourceOfProfile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    reserveFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    countryMobileCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    mobileNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    telephoneNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    titleDescTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    titleNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    fullNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    titleCodeEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    titleNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    firstNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    lastNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    fullNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    nationalityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    nationalityDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    wtaxFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    faxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    genderCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    occupationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    occupationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    occupationDescOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    occupationCodeTsd?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PersonalOutput
     */
    birthDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    taxId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    taxType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    expiredDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    lifeTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    assetTransferFlag?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PersonalOutput
     */
    assetTransferDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    edividendBank?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    edividendAcno?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    edividendDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    edividendBankTsd?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    edividendAcnoTsd?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    edividendDateTsd?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    monthlyIncome?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    tinno?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    botcorpTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    contactPlace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PersonalOutput
     */
    logTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    identityType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    identityDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    identityNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PersonalOutput
     */
    identityExpireDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    identityNeverExpire?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    familyStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    investmentPurposeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    investmentPurposeOther?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    investmentExp?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    investmentYear?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    incomeCountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    incomeSourceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    incomeSourceOther?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    income?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    incomeRateCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    assetValue?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    isOwner?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    docReceiveChannel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    docReceiveAddressType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    beneficiaryFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    beneficiaryLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    beneficiaryRelationshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    beneficiaryRelationshipOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    beneficiaryType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    beneficiaryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    beneficiaryRelationshipDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    beneficiaryNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PersonalOutput
     */
    beneficiaryExpireDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    beneficiaryNeverExpire?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    jobOfficeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    jobPosition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    jobDepartment?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    politicianRelation?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    politicianFamily?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    politicianPosition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    jobTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    masterEmploymentTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    occupationOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    businessTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    businessTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    businessTypeOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    titleThOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    birthCity?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    birthCountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    birthCountryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    makerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    chekerId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    suitabilityScore?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof PersonalOutput
     */
    suitabilityTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    suitabilityBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PersonalOutput
     */
    knowledgeAssessmentTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    knowledgeAssessmentBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    spouseTitleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    spouseTitleDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    spouseTitleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    spouseFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    spouseLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    spouseIdentityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    spouseReferenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    spouseReferenceDesc?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    kycScore?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    kycRiskLevel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    kycRiskLevelDescription?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PersonalOutput
     */
    openDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    isFatca?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    branchCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    incomeRateDesc?: string | null;
    /**
     * 
     * @type {Array<AddressInfoOutput>}
     * @memberof PersonalOutput
     */
    addresses?: Array<AddressInfoOutput> | null;
}

/**
 * Check if a given object implements the PersonalOutput interface.
 */
export function instanceOfPersonalOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonalOutputFromJSON(json: any): PersonalOutput {
    return PersonalOutputFromJSONTyped(json, false);
}

export function PersonalOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'personTypeCode': !exists(json, 'personTypeCode') ? undefined : json['personTypeCode'],
        'personTypeDesc': !exists(json, 'personTypeDesc') ? undefined : json['personTypeDesc'],
        'boAccountRef': !exists(json, 'boAccountRef') ? undefined : json['boAccountRef'],
        'sourceOfProfile': !exists(json, 'sourceOfProfile') ? undefined : json['sourceOfProfile'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'reserveFlag': !exists(json, 'reserveFlag') ? undefined : json['reserveFlag'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'countryMobileCode': !exists(json, 'countryMobileCode') ? undefined : json['countryMobileCode'],
        'mobileNo': !exists(json, 'mobileNo') ? undefined : json['mobileNo'],
        'telephoneNo': !exists(json, 'telephoneNo') ? undefined : json['telephoneNo'],
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
        'titleDescTh': !exists(json, 'titleDescTh') ? undefined : json['titleDescTh'],
        'titleNameTh': !exists(json, 'titleNameTh') ? undefined : json['titleNameTh'],
        'firstNameTh': !exists(json, 'firstNameTh') ? undefined : json['firstNameTh'],
        'lastNameTh': !exists(json, 'lastNameTh') ? undefined : json['lastNameTh'],
        'fullNameTh': !exists(json, 'fullNameTh') ? undefined : json['fullNameTh'],
        'titleCodeEn': !exists(json, 'titleCodeEn') ? undefined : json['titleCodeEn'],
        'titleNameEn': !exists(json, 'titleNameEn') ? undefined : json['titleNameEn'],
        'firstNameEn': !exists(json, 'firstNameEn') ? undefined : json['firstNameEn'],
        'lastNameEn': !exists(json, 'lastNameEn') ? undefined : json['lastNameEn'],
        'fullNameEn': !exists(json, 'fullNameEn') ? undefined : json['fullNameEn'],
        'nationalityCode': !exists(json, 'nationalityCode') ? undefined : json['nationalityCode'],
        'nationalityDesc': !exists(json, 'nationalityDesc') ? undefined : json['nationalityDesc'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'wtaxFlag': !exists(json, 'wtaxFlag') ? undefined : json['wtaxFlag'],
        'faxNo': !exists(json, 'faxNo') ? undefined : json['faxNo'],
        'genderCode': !exists(json, 'genderCode') ? undefined : json['genderCode'],
        'occupationCode': !exists(json, 'occupationCode') ? undefined : json['occupationCode'],
        'occupationDesc': !exists(json, 'occupationDesc') ? undefined : json['occupationDesc'],
        'occupationDescOther': !exists(json, 'occupationDescOther') ? undefined : json['occupationDescOther'],
        'occupationCodeTsd': !exists(json, 'occupationCodeTsd') ? undefined : json['occupationCodeTsd'],
        'birthDate': !exists(json, 'birthDate') ? undefined : (json['birthDate'] === null ? null : new Date(json['birthDate'])),
        'taxId': !exists(json, 'taxId') ? undefined : json['taxId'],
        'taxType': !exists(json, 'taxType') ? undefined : json['taxType'],
        'expiredDate': !exists(json, 'expiredDate') ? undefined : json['expiredDate'],
        'lifeTime': !exists(json, 'lifeTime') ? undefined : json['lifeTime'],
        'assetTransferFlag': !exists(json, 'assetTransferFlag') ? undefined : json['assetTransferFlag'],
        'assetTransferDate': !exists(json, 'assetTransferDate') ? undefined : (json['assetTransferDate'] === null ? null : new Date(json['assetTransferDate'])),
        'edividendBank': !exists(json, 'edividendBank') ? undefined : json['edividendBank'],
        'edividendAcno': !exists(json, 'edividendAcno') ? undefined : json['edividendAcno'],
        'edividendDate': !exists(json, 'edividendDate') ? undefined : json['edividendDate'],
        'edividendBankTsd': !exists(json, 'edividendBankTsd') ? undefined : json['edividendBankTsd'],
        'edividendAcnoTsd': !exists(json, 'edividendAcnoTsd') ? undefined : json['edividendAcnoTsd'],
        'edividendDateTsd': !exists(json, 'edividendDateTsd') ? undefined : json['edividendDateTsd'],
        'monthlyIncome': !exists(json, 'monthlyIncome') ? undefined : json['monthlyIncome'],
        'tinno': !exists(json, 'tinno') ? undefined : json['tinno'],
        'botcorpTypeCode': !exists(json, 'botcorpTypeCode') ? undefined : json['botcorpTypeCode'],
        'contactPlace': !exists(json, 'contactPlace') ? undefined : json['contactPlace'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
        'identityType': !exists(json, 'identityType') ? undefined : json['identityType'],
        'identityDesc': !exists(json, 'identityDesc') ? undefined : json['identityDesc'],
        'identityNo': !exists(json, 'identityNo') ? undefined : json['identityNo'],
        'identityExpireDate': !exists(json, 'identityExpireDate') ? undefined : (json['identityExpireDate'] === null ? null : new Date(json['identityExpireDate'])),
        'identityNeverExpire': !exists(json, 'identityNeverExpire') ? undefined : json['identityNeverExpire'],
        'familyStatus': !exists(json, 'familyStatus') ? undefined : json['familyStatus'],
        'investmentPurposeCode': !exists(json, 'investmentPurposeCode') ? undefined : json['investmentPurposeCode'],
        'investmentPurposeOther': !exists(json, 'investmentPurposeOther') ? undefined : json['investmentPurposeOther'],
        'investmentExp': !exists(json, 'investmentExp') ? undefined : json['investmentExp'],
        'investmentYear': !exists(json, 'investmentYear') ? undefined : json['investmentYear'],
        'incomeCountry': !exists(json, 'incomeCountry') ? undefined : json['incomeCountry'],
        'incomeSourceCode': !exists(json, 'incomeSourceCode') ? undefined : json['incomeSourceCode'],
        'incomeSourceOther': !exists(json, 'incomeSourceOther') ? undefined : json['incomeSourceOther'],
        'income': !exists(json, 'income') ? undefined : json['income'],
        'incomeRateCode': !exists(json, 'incomeRateCode') ? undefined : json['incomeRateCode'],
        'assetValue': !exists(json, 'assetValue') ? undefined : json['assetValue'],
        'isOwner': !exists(json, 'isOwner') ? undefined : json['isOwner'],
        'docReceiveChannel': !exists(json, 'docReceiveChannel') ? undefined : json['docReceiveChannel'],
        'docReceiveAddressType': !exists(json, 'docReceiveAddressType') ? undefined : json['docReceiveAddressType'],
        'beneficiaryFirstName': !exists(json, 'beneficiaryFirstName') ? undefined : json['beneficiaryFirstName'],
        'beneficiaryLastName': !exists(json, 'beneficiaryLastName') ? undefined : json['beneficiaryLastName'],
        'beneficiaryRelationshipCode': !exists(json, 'beneficiaryRelationshipCode') ? undefined : json['beneficiaryRelationshipCode'],
        'beneficiaryRelationshipOther': !exists(json, 'beneficiaryRelationshipOther') ? undefined : json['beneficiaryRelationshipOther'],
        'beneficiaryType': !exists(json, 'beneficiaryType') ? undefined : json['beneficiaryType'],
        'beneficiaryDesc': !exists(json, 'beneficiaryDesc') ? undefined : json['beneficiaryDesc'],
        'beneficiaryRelationshipDesc': !exists(json, 'beneficiaryRelationshipDesc') ? undefined : json['beneficiaryRelationshipDesc'],
        'beneficiaryNo': !exists(json, 'beneficiaryNo') ? undefined : json['beneficiaryNo'],
        'beneficiaryExpireDate': !exists(json, 'beneficiaryExpireDate') ? undefined : (json['beneficiaryExpireDate'] === null ? null : new Date(json['beneficiaryExpireDate'])),
        'beneficiaryNeverExpire': !exists(json, 'beneficiaryNeverExpire') ? undefined : json['beneficiaryNeverExpire'],
        'jobOfficeName': !exists(json, 'jobOfficeName') ? undefined : json['jobOfficeName'],
        'jobPosition': !exists(json, 'jobPosition') ? undefined : json['jobPosition'],
        'jobDepartment': !exists(json, 'jobDepartment') ? undefined : json['jobDepartment'],
        'politicianRelation': !exists(json, 'politicianRelation') ? undefined : json['politicianRelation'],
        'politicianFamily': !exists(json, 'politicianFamily') ? undefined : json['politicianFamily'],
        'politicianPosition': !exists(json, 'politicianPosition') ? undefined : json['politicianPosition'],
        'jobTypeCode': !exists(json, 'jobTypeCode') ? undefined : json['jobTypeCode'],
        'masterEmploymentTypeDesc': !exists(json, 'masterEmploymentTypeDesc') ? undefined : json['masterEmploymentTypeDesc'],
        'occupationOther': !exists(json, 'occupationOther') ? undefined : json['occupationOther'],
        'businessTypeCode': !exists(json, 'businessTypeCode') ? undefined : json['businessTypeCode'],
        'businessTypeDesc': !exists(json, 'businessTypeDesc') ? undefined : json['businessTypeDesc'],
        'businessTypeOther': !exists(json, 'businessTypeOther') ? undefined : json['businessTypeOther'],
        'titleThOther': !exists(json, 'titleThOther') ? undefined : json['titleThOther'],
        'birthCity': !exists(json, 'birthCity') ? undefined : json['birthCity'],
        'birthCountry': !exists(json, 'birthCountry') ? undefined : json['birthCountry'],
        'birthCountryDesc': !exists(json, 'birthCountryDesc') ? undefined : json['birthCountryDesc'],
        'makerId': !exists(json, 'makerId') ? undefined : json['makerId'],
        'chekerId': !exists(json, 'chekerId') ? undefined : json['chekerId'],
        'suitabilityScore': !exists(json, 'suitabilityScore') ? undefined : json['suitabilityScore'],
        'suitabilityTimestamp': !exists(json, 'suitabilityTimestamp') ? undefined : (json['suitabilityTimestamp'] === null ? null : new Date(json['suitabilityTimestamp'])),
        'suitabilityBy': !exists(json, 'suitabilityBy') ? undefined : json['suitabilityBy'],
        'knowledgeAssessmentTimestamp': !exists(json, 'knowledgeAssessmentTimestamp') ? undefined : (json['knowledgeAssessmentTimestamp'] === null ? null : new Date(json['knowledgeAssessmentTimestamp'])),
        'knowledgeAssessmentBy': !exists(json, 'knowledgeAssessmentBy') ? undefined : json['knowledgeAssessmentBy'],
        'spouseTitleCode': !exists(json, 'spouseTitleCode') ? undefined : json['spouseTitleCode'],
        'spouseTitleDesc': !exists(json, 'spouseTitleDesc') ? undefined : json['spouseTitleDesc'],
        'spouseTitleOther': !exists(json, 'spouseTitleOther') ? undefined : json['spouseTitleOther'],
        'spouseFirstName': !exists(json, 'spouseFirstName') ? undefined : json['spouseFirstName'],
        'spouseLastName': !exists(json, 'spouseLastName') ? undefined : json['spouseLastName'],
        'spouseIdentityId': !exists(json, 'spouseIdentityId') ? undefined : json['spouseIdentityId'],
        'spouseReferenceType': !exists(json, 'spouseReferenceType') ? undefined : json['spouseReferenceType'],
        'spouseReferenceDesc': !exists(json, 'spouseReferenceDesc') ? undefined : json['spouseReferenceDesc'],
        'kycScore': !exists(json, 'kycScore') ? undefined : json['kycScore'],
        'kycRiskLevel': !exists(json, 'kycRiskLevel') ? undefined : json['kycRiskLevel'],
        'kycRiskLevelDescription': !exists(json, 'kycRiskLevelDescription') ? undefined : json['kycRiskLevelDescription'],
        'openDate': !exists(json, 'openDate') ? undefined : (json['openDate'] === null ? null : new Date(json['openDate'])),
        'isFatca': !exists(json, 'isFatca') ? undefined : json['isFatca'],
        'branchCode': !exists(json, 'branchCode') ? undefined : json['branchCode'],
        'incomeRateDesc': !exists(json, 'incomeRateDesc') ? undefined : json['incomeRateDesc'],
        'addresses': !exists(json, 'addresses') ? undefined : (json['addresses'] === null ? null : (json['addresses'] as Array<any>).map(AddressInfoOutputFromJSON)),
    };
}

export function PersonalOutputToJSON(value?: PersonalOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'personTypeCode': value.personTypeCode,
        'personTypeDesc': value.personTypeDesc,
        'boAccountRef': value.boAccountRef,
        'sourceOfProfile': value.sourceOfProfile,
        'remark': value.remark,
        'reserveFlag': value.reserveFlag,
        'email': value.email,
        'countryMobileCode': value.countryMobileCode,
        'mobileNo': value.mobileNo,
        'telephoneNo': value.telephoneNo,
        'titleCode': value.titleCode,
        'titleDescTh': value.titleDescTh,
        'titleNameTh': value.titleNameTh,
        'firstNameTh': value.firstNameTh,
        'lastNameTh': value.lastNameTh,
        'fullNameTh': value.fullNameTh,
        'titleCodeEn': value.titleCodeEn,
        'titleNameEn': value.titleNameEn,
        'firstNameEn': value.firstNameEn,
        'lastNameEn': value.lastNameEn,
        'fullNameEn': value.fullNameEn,
        'nationalityCode': value.nationalityCode,
        'nationalityDesc': value.nationalityDesc,
        'countryCode': value.countryCode,
        'wtaxFlag': value.wtaxFlag,
        'faxNo': value.faxNo,
        'genderCode': value.genderCode,
        'occupationCode': value.occupationCode,
        'occupationDesc': value.occupationDesc,
        'occupationDescOther': value.occupationDescOther,
        'occupationCodeTsd': value.occupationCodeTsd,
        'birthDate': value.birthDate === undefined ? undefined : (value.birthDate === null ? null : value.birthDate.toISOString()),
        'taxId': value.taxId,
        'taxType': value.taxType,
        'expiredDate': value.expiredDate,
        'lifeTime': value.lifeTime,
        'assetTransferFlag': value.assetTransferFlag,
        'assetTransferDate': value.assetTransferDate === undefined ? undefined : (value.assetTransferDate === null ? null : value.assetTransferDate.toISOString()),
        'edividendBank': value.edividendBank,
        'edividendAcno': value.edividendAcno,
        'edividendDate': value.edividendDate,
        'edividendBankTsd': value.edividendBankTsd,
        'edividendAcnoTsd': value.edividendAcnoTsd,
        'edividendDateTsd': value.edividendDateTsd,
        'monthlyIncome': value.monthlyIncome,
        'tinno': value.tinno,
        'botcorpTypeCode': value.botcorpTypeCode,
        'contactPlace': value.contactPlace,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
        'identityType': value.identityType,
        'identityDesc': value.identityDesc,
        'identityNo': value.identityNo,
        'identityExpireDate': value.identityExpireDate === undefined ? undefined : (value.identityExpireDate === null ? null : value.identityExpireDate.toISOString()),
        'identityNeverExpire': value.identityNeverExpire,
        'familyStatus': value.familyStatus,
        'investmentPurposeCode': value.investmentPurposeCode,
        'investmentPurposeOther': value.investmentPurposeOther,
        'investmentExp': value.investmentExp,
        'investmentYear': value.investmentYear,
        'incomeCountry': value.incomeCountry,
        'incomeSourceCode': value.incomeSourceCode,
        'incomeSourceOther': value.incomeSourceOther,
        'income': value.income,
        'incomeRateCode': value.incomeRateCode,
        'assetValue': value.assetValue,
        'isOwner': value.isOwner,
        'docReceiveChannel': value.docReceiveChannel,
        'docReceiveAddressType': value.docReceiveAddressType,
        'beneficiaryFirstName': value.beneficiaryFirstName,
        'beneficiaryLastName': value.beneficiaryLastName,
        'beneficiaryRelationshipCode': value.beneficiaryRelationshipCode,
        'beneficiaryRelationshipOther': value.beneficiaryRelationshipOther,
        'beneficiaryType': value.beneficiaryType,
        'beneficiaryDesc': value.beneficiaryDesc,
        'beneficiaryRelationshipDesc': value.beneficiaryRelationshipDesc,
        'beneficiaryNo': value.beneficiaryNo,
        'beneficiaryExpireDate': value.beneficiaryExpireDate === undefined ? undefined : (value.beneficiaryExpireDate === null ? null : value.beneficiaryExpireDate.toISOString()),
        'beneficiaryNeverExpire': value.beneficiaryNeverExpire,
        'jobOfficeName': value.jobOfficeName,
        'jobPosition': value.jobPosition,
        'jobDepartment': value.jobDepartment,
        'politicianRelation': value.politicianRelation,
        'politicianFamily': value.politicianFamily,
        'politicianPosition': value.politicianPosition,
        'jobTypeCode': value.jobTypeCode,
        'masterEmploymentTypeDesc': value.masterEmploymentTypeDesc,
        'occupationOther': value.occupationOther,
        'businessTypeCode': value.businessTypeCode,
        'businessTypeDesc': value.businessTypeDesc,
        'businessTypeOther': value.businessTypeOther,
        'titleThOther': value.titleThOther,
        'birthCity': value.birthCity,
        'birthCountry': value.birthCountry,
        'birthCountryDesc': value.birthCountryDesc,
        'makerId': value.makerId,
        'chekerId': value.chekerId,
        'suitabilityScore': value.suitabilityScore,
        'suitabilityTimestamp': value.suitabilityTimestamp === undefined ? undefined : (value.suitabilityTimestamp === null ? null : value.suitabilityTimestamp.toISOString()),
        'suitabilityBy': value.suitabilityBy,
        'knowledgeAssessmentTimestamp': value.knowledgeAssessmentTimestamp === undefined ? undefined : (value.knowledgeAssessmentTimestamp === null ? null : value.knowledgeAssessmentTimestamp.toISOString()),
        'knowledgeAssessmentBy': value.knowledgeAssessmentBy,
        'spouseTitleCode': value.spouseTitleCode,
        'spouseTitleDesc': value.spouseTitleDesc,
        'spouseTitleOther': value.spouseTitleOther,
        'spouseFirstName': value.spouseFirstName,
        'spouseLastName': value.spouseLastName,
        'spouseIdentityId': value.spouseIdentityId,
        'spouseReferenceType': value.spouseReferenceType,
        'spouseReferenceDesc': value.spouseReferenceDesc,
        'kycScore': value.kycScore,
        'kycRiskLevel': value.kycRiskLevel,
        'kycRiskLevelDescription': value.kycRiskLevelDescription,
        'openDate': value.openDate === undefined ? undefined : (value.openDate === null ? null : value.openDate.toISOString()),
        'isFatca': value.isFatca,
        'branchCode': value.branchCode,
        'incomeRateDesc': value.incomeRateDesc,
        'addresses': value.addresses === undefined ? undefined : (value.addresses === null ? null : (value.addresses as Array<any>).map(AddressInfoOutputToJSON)),
    };
}

