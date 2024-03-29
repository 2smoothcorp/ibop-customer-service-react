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
    'referenceType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'referenceID'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'personTypeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'boAccountRef'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'sourceOfProfile'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'remark'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'reserveFlag'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'countryMobileCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'mobileNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'telephoneNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'titleCodeTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'titleNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'firstNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'lastNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'fullNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'titleCodeEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'titleNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'firstNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'lastNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'fullNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'nationalityCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'countryCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'countryDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'wTaxFlag'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'faxNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'genderCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'occupationCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'occupationDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'occupationDescOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'occupationCodeTSD'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'birthDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'taxID'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'taxType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'expiredDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'lifeTime'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'assetTransferFlag'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'assetTransferDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'eDividendBank'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'eDividendACNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'eDividendDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'eDividendBankTSD'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'eDividendACNoTSD'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'eDividendDateTSD'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    'monthlyIncome'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'tinNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'botCorpTypeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'contactPlace'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'logFlag'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'logUser'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'logTimestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'identityType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'identityNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'identityExpireDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    'identityNeverExpire'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'familyStatus'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'investmentPurposeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'investmentPurposeOther'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    'investmentExp'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    'investmentYear'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'incomeCountry'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'incomeSourceCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'incomeSourceOther'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    'income'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'incomeRateCode'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    'assetValue'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    'isOwner'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'docReceiveChannel'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'docReceiveAddressType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'beneficiaryFirstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'beneficiaryLastName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'beneficiaryRelationshipCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'beneficiaryRelationshipOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'beneficiaryType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'beneficiaryNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'beneficiaryExpireDate'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    'beneficiaryNeverExpire'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'jobOfficeName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'jobPosition'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'jobDepartment'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    'politicianRelation'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    'politicianFamily'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'politicianPosition'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'jobTypeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'occupationOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'businessTypeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'businessTypeOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'titleThOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'birthCity'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'birthCountry'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'makerId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'chekerId'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    'suitabilityScore'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'suitabilityTimestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'suitabilityBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'knowledgeAssessmentTimestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'knowledgeAssessmentBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'spouseTitleCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'spouseTitleName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'spouseTitleOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'spouseFirstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'spouseLastName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'spouseIdentityId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'spouseReferenceType'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    'kycScore'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'kycRiskLevel'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'kycRiskLevelDescription'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileRequest
     */
    'isFATCA'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'branchCode'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileRequest
     */
    'creditLineApplicantId'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileRequest
     */
    'approveByUser'?: string | null;
}

