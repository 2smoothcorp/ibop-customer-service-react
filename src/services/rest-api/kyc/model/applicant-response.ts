/* tslint:disable */
/* eslint-disable */
/**
 * KYC API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.93
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ApplicantResponse
 */
export interface ApplicantResponse {
    /**
     * 
     * @type {number}
     * @memberof ApplicantResponse
     */
    'applicantId'?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicantResponse
     */
    'flowId'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'riskLevel'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'requestBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'fullName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'firstNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'lastNameTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'firstNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'lastNameEn'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'personType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'nationCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'nationDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'referenceId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'referenceType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'occupationCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'occupationDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'occupationOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'fundingSourceCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'fundingSourceDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'fundingSourceOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'politicianRelationCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'politicianRelationDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'remark'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'verifyMethod'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'createdBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantResponse
     */
    'createdDate'?: string | null;
}
