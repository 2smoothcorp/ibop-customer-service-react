/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.219
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AddressInfoOutput } from './address-info-output';

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
    'corporateId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'referenceType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'referenceId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'personTypeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'personTypeDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'boAccountRef'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'sourceOfProfile'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'remark'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'reserveFlag'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'countryMobileCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'mobileNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'telephoneNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'titleCodeTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'titleDescTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'titleNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'firstNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'lastNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'fullNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'titleCodeEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'titleNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'firstNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'lastNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'fullNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'nationalityCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'nationalityDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'countryCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'wtaxFlag'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'faxNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'genderCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'occupationCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'occupationDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'occupationDescOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'occupationCodeTsd'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'birthDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'taxId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'taxType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'expiredDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'lifeTime'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'assetTransferFlag'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'assetTransferDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'edividendBank'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'edividendAcno'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'edividendDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'edividendBankTsd'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'edividendAcnoTsd'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'edividendDateTsd'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    'monthlyIncome'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'tinno'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'botcorpTypeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'contactPlace'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'logFlag'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'logUser'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'logTimestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'identityType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'identityDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'identityNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'identityExpireDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    'identityNeverExpire'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'familyStatus'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'investmentPurposeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'investmentPurposeOther'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    'investmentExp'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    'investmentYear'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'incomeCountry'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'incomeSourceCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'incomeSourceOther'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    'income'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'incomeRateCode'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    'assetValue'?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    'isOwner'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'docReceiveChannel'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'docReceiveAddressType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'beneficiaryFirstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'beneficiaryLastName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'beneficiaryRelationshipCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'beneficiaryRelationshipOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'beneficiaryType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'beneficiaryDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'beneficiaryNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'beneficiaryExpireDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    'beneficiaryNeverExpire'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'jobOfficeName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'jobPosition'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'jobDepartment'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    'politicianRelation'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    'politicianFamily'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'politicianPosition'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'jobTypeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'masterEmploymentTypeDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'occupationOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'businessTypeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'businessTypeDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'businessTypeOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'titleThOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'birthCity'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'birthCountry'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'birthCountryDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'makerId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'chekerId'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    'suitabilityScore'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'suitabilityTimestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'suitabilityBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'knowledgeAssessmentTimestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'knowledgeAssessmentBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'spouseTitleCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'spouseTitleDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'spouseTitleOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'spouseFirstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'spouseLastName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'spouseIdentityId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'spouseReferenceType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'spouseReferenceDesc'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalOutput
     */
    'kycScore'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'kycRiskLevel'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'kycRiskLevelDescription'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'openDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalOutput
     */
    'isFatca'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutput
     */
    'branchCode'?: string | null;
    /**
     * 
     * @type {Array<AddressInfoOutput>}
     * @memberof PersonalOutput
     */
    'addresses'?: Array<AddressInfoOutput> | null;
}

