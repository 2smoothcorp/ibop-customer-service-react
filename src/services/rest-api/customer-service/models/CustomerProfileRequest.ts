/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.338
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CustomerProfileRequest
 */
export interface CustomerProfileRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    referenceID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    personTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    boAccountRef?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    sourceOfProfile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    reserveFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    countryMobileCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    mobileNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    telephoneNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    titleNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    fullNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    titleCodeEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    titleNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    firstNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    lastNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    fullNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    nationalityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    countryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    wTaxFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    faxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    genderCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    occupationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    occupationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    occupationDescOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    occupationCodeTSD?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerProfileRequest
     */
    birthDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    taxID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    taxType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    expiredDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    lifeTime?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    assetTransferFlag?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerProfileRequest
     */
    assetTransferDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    eDividendBank?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    eDividendACNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    eDividendDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    eDividendBankTSD?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    eDividendACNoTSD?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    eDividendDateTSD?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    monthlyIncome?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    tinNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    botCorpTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    contactPlace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerProfileRequest
     */
    logTimestamp?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerProfileRequest
     */
    identityExpireDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    identityNeverExpire?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    familyStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    investmentPurposeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    investmentPurposeOther?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    investmentExp?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    investmentYear?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    incomeCountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    incomeSourceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    incomeSourceOther?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    income?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    incomeRateCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    assetValue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    isOwner?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    docReceiveChannel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    docReceiveAddressType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    beneficiaryFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    beneficiaryLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    beneficiaryRelationshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    beneficiaryRelationshipOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    beneficiaryType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    beneficiaryNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerProfileRequest
     */
    beneficiaryExpireDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    beneficiaryNeverExpire?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    jobOfficeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    jobPosition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    jobDepartment?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    politicianRelation?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    politicianFamily?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    politicianPosition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    jobTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    occupationOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    businessTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    businessTypeOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    titleThOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    birthCity?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    birthCountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    makerId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    chekerId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    suitabilityScore?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerProfileRequest
     */
    suitabilityTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    suitabilityBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerProfileRequest
     */
    knowledgeAssessmentTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    knowledgeAssessmentBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    spouseTitleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    spouseTitleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    spouseTitleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    spouseFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    spouseLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    spouseIdentityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    spouseReferenceType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    kycScore?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    kycRiskLevel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    kycRiskLevelDescription?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    isFATCA?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    branchCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    creditLineApplicantId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    assetCreditLine?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    approveByUser?: string | null;
}

/**
 * Check if a given object implements the CustomerProfileRequest interface.
 */
export function instanceOfCustomerProfileRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerProfileRequestFromJSON(json: any): CustomerProfileRequest {
    return CustomerProfileRequestFromJSONTyped(json, false);
}

export function CustomerProfileRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerProfileRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceID': !exists(json, 'referenceID') ? undefined : json['referenceID'],
        'personTypeCode': !exists(json, 'personTypeCode') ? undefined : json['personTypeCode'],
        'boAccountRef': !exists(json, 'boAccountRef') ? undefined : json['boAccountRef'],
        'sourceOfProfile': !exists(json, 'sourceOfProfile') ? undefined : json['sourceOfProfile'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'reserveFlag': !exists(json, 'reserveFlag') ? undefined : json['reserveFlag'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'countryMobileCode': !exists(json, 'countryMobileCode') ? undefined : json['countryMobileCode'],
        'mobileNo': !exists(json, 'mobileNo') ? undefined : json['mobileNo'],
        'telephoneNo': !exists(json, 'telephoneNo') ? undefined : json['telephoneNo'],
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
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
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryDesc': !exists(json, 'countryDesc') ? undefined : json['countryDesc'],
        'wTaxFlag': !exists(json, 'wTaxFlag') ? undefined : json['wTaxFlag'],
        'faxNo': !exists(json, 'faxNo') ? undefined : json['faxNo'],
        'genderCode': !exists(json, 'genderCode') ? undefined : json['genderCode'],
        'occupationCode': !exists(json, 'occupationCode') ? undefined : json['occupationCode'],
        'occupationDesc': !exists(json, 'occupationDesc') ? undefined : json['occupationDesc'],
        'occupationDescOther': !exists(json, 'occupationDescOther') ? undefined : json['occupationDescOther'],
        'occupationCodeTSD': !exists(json, 'occupationCodeTSD') ? undefined : json['occupationCodeTSD'],
        'birthDate': !exists(json, 'birthDate') ? undefined : (json['birthDate'] === null ? null : new Date(json['birthDate'])),
        'taxID': !exists(json, 'taxID') ? undefined : json['taxID'],
        'taxType': !exists(json, 'taxType') ? undefined : json['taxType'],
        'expiredDate': !exists(json, 'expiredDate') ? undefined : json['expiredDate'],
        'lifeTime': !exists(json, 'lifeTime') ? undefined : json['lifeTime'],
        'assetTransferFlag': !exists(json, 'assetTransferFlag') ? undefined : json['assetTransferFlag'],
        'assetTransferDate': !exists(json, 'assetTransferDate') ? undefined : (json['assetTransferDate'] === null ? null : new Date(json['assetTransferDate'])),
        'eDividendBank': !exists(json, 'eDividendBank') ? undefined : json['eDividendBank'],
        'eDividendACNo': !exists(json, 'eDividendACNo') ? undefined : json['eDividendACNo'],
        'eDividendDate': !exists(json, 'eDividendDate') ? undefined : json['eDividendDate'],
        'eDividendBankTSD': !exists(json, 'eDividendBankTSD') ? undefined : json['eDividendBankTSD'],
        'eDividendACNoTSD': !exists(json, 'eDividendACNoTSD') ? undefined : json['eDividendACNoTSD'],
        'eDividendDateTSD': !exists(json, 'eDividendDateTSD') ? undefined : json['eDividendDateTSD'],
        'monthlyIncome': !exists(json, 'monthlyIncome') ? undefined : json['monthlyIncome'],
        'tinNo': !exists(json, 'tinNo') ? undefined : json['tinNo'],
        'botCorpTypeCode': !exists(json, 'botCorpTypeCode') ? undefined : json['botCorpTypeCode'],
        'contactPlace': !exists(json, 'contactPlace') ? undefined : json['contactPlace'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
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
        'occupationOther': !exists(json, 'occupationOther') ? undefined : json['occupationOther'],
        'businessTypeCode': !exists(json, 'businessTypeCode') ? undefined : json['businessTypeCode'],
        'businessTypeOther': !exists(json, 'businessTypeOther') ? undefined : json['businessTypeOther'],
        'titleThOther': !exists(json, 'titleThOther') ? undefined : json['titleThOther'],
        'birthCity': !exists(json, 'birthCity') ? undefined : json['birthCity'],
        'birthCountry': !exists(json, 'birthCountry') ? undefined : json['birthCountry'],
        'makerId': !exists(json, 'makerId') ? undefined : json['makerId'],
        'chekerId': !exists(json, 'chekerId') ? undefined : json['chekerId'],
        'suitabilityScore': !exists(json, 'suitabilityScore') ? undefined : json['suitabilityScore'],
        'suitabilityTimestamp': !exists(json, 'suitabilityTimestamp') ? undefined : (json['suitabilityTimestamp'] === null ? null : new Date(json['suitabilityTimestamp'])),
        'suitabilityBy': !exists(json, 'suitabilityBy') ? undefined : json['suitabilityBy'],
        'knowledgeAssessmentTimestamp': !exists(json, 'knowledgeAssessmentTimestamp') ? undefined : (json['knowledgeAssessmentTimestamp'] === null ? null : new Date(json['knowledgeAssessmentTimestamp'])),
        'knowledgeAssessmentBy': !exists(json, 'knowledgeAssessmentBy') ? undefined : json['knowledgeAssessmentBy'],
        'spouseTitleCode': !exists(json, 'spouseTitleCode') ? undefined : json['spouseTitleCode'],
        'spouseTitleName': !exists(json, 'spouseTitleName') ? undefined : json['spouseTitleName'],
        'spouseTitleOther': !exists(json, 'spouseTitleOther') ? undefined : json['spouseTitleOther'],
        'spouseFirstName': !exists(json, 'spouseFirstName') ? undefined : json['spouseFirstName'],
        'spouseLastName': !exists(json, 'spouseLastName') ? undefined : json['spouseLastName'],
        'spouseIdentityId': !exists(json, 'spouseIdentityId') ? undefined : json['spouseIdentityId'],
        'spouseReferenceType': !exists(json, 'spouseReferenceType') ? undefined : json['spouseReferenceType'],
        'kycScore': !exists(json, 'kycScore') ? undefined : json['kycScore'],
        'kycRiskLevel': !exists(json, 'kycRiskLevel') ? undefined : json['kycRiskLevel'],
        'kycRiskLevelDescription': !exists(json, 'kycRiskLevelDescription') ? undefined : json['kycRiskLevelDescription'],
        'isFATCA': !exists(json, 'isFATCA') ? undefined : json['isFATCA'],
        'branchCode': !exists(json, 'branchCode') ? undefined : json['branchCode'],
        'creditLineApplicantId': !exists(json, 'creditLineApplicantId') ? undefined : json['creditLineApplicantId'],
        'assetCreditLine': !exists(json, 'assetCreditLine') ? undefined : json['assetCreditLine'],
        'approveByUser': !exists(json, 'approveByUser') ? undefined : json['approveByUser'],
    };
}

export function CustomerProfileRequestToJSON(value?: CustomerProfileRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'referenceType': value.referenceType,
        'referenceID': value.referenceID,
        'personTypeCode': value.personTypeCode,
        'boAccountRef': value.boAccountRef,
        'sourceOfProfile': value.sourceOfProfile,
        'remark': value.remark,
        'reserveFlag': value.reserveFlag,
        'email': value.email,
        'countryMobileCode': value.countryMobileCode,
        'mobileNo': value.mobileNo,
        'telephoneNo': value.telephoneNo,
        'titleCode': value.titleCode,
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
        'countryCode': value.countryCode,
        'countryDesc': value.countryDesc,
        'wTaxFlag': value.wTaxFlag,
        'faxNo': value.faxNo,
        'genderCode': value.genderCode,
        'occupationCode': value.occupationCode,
        'occupationDesc': value.occupationDesc,
        'occupationDescOther': value.occupationDescOther,
        'occupationCodeTSD': value.occupationCodeTSD,
        'birthDate': value.birthDate === undefined ? undefined : (value.birthDate === null ? null : value.birthDate.toISOString()),
        'taxID': value.taxID,
        'taxType': value.taxType,
        'expiredDate': value.expiredDate,
        'lifeTime': value.lifeTime,
        'assetTransferFlag': value.assetTransferFlag,
        'assetTransferDate': value.assetTransferDate === undefined ? undefined : (value.assetTransferDate === null ? null : value.assetTransferDate.toISOString()),
        'eDividendBank': value.eDividendBank,
        'eDividendACNo': value.eDividendACNo,
        'eDividendDate': value.eDividendDate,
        'eDividendBankTSD': value.eDividendBankTSD,
        'eDividendACNoTSD': value.eDividendACNoTSD,
        'eDividendDateTSD': value.eDividendDateTSD,
        'monthlyIncome': value.monthlyIncome,
        'tinNo': value.tinNo,
        'botCorpTypeCode': value.botCorpTypeCode,
        'contactPlace': value.contactPlace,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
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
        'occupationOther': value.occupationOther,
        'businessTypeCode': value.businessTypeCode,
        'businessTypeOther': value.businessTypeOther,
        'titleThOther': value.titleThOther,
        'birthCity': value.birthCity,
        'birthCountry': value.birthCountry,
        'makerId': value.makerId,
        'chekerId': value.chekerId,
        'suitabilityScore': value.suitabilityScore,
        'suitabilityTimestamp': value.suitabilityTimestamp === undefined ? undefined : (value.suitabilityTimestamp === null ? null : value.suitabilityTimestamp.toISOString()),
        'suitabilityBy': value.suitabilityBy,
        'knowledgeAssessmentTimestamp': value.knowledgeAssessmentTimestamp === undefined ? undefined : (value.knowledgeAssessmentTimestamp === null ? null : value.knowledgeAssessmentTimestamp.toISOString()),
        'knowledgeAssessmentBy': value.knowledgeAssessmentBy,
        'spouseTitleCode': value.spouseTitleCode,
        'spouseTitleName': value.spouseTitleName,
        'spouseTitleOther': value.spouseTitleOther,
        'spouseFirstName': value.spouseFirstName,
        'spouseLastName': value.spouseLastName,
        'spouseIdentityId': value.spouseIdentityId,
        'spouseReferenceType': value.spouseReferenceType,
        'kycScore': value.kycScore,
        'kycRiskLevel': value.kycRiskLevel,
        'kycRiskLevelDescription': value.kycRiskLevelDescription,
        'isFATCA': value.isFATCA,
        'branchCode': value.branchCode,
        'creditLineApplicantId': value.creditLineApplicantId,
        'assetCreditLine': value.assetCreditLine,
        'approveByUser': value.approveByUser,
    };
}

