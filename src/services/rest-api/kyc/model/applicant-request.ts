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
 * Represents a request for creating or updating applicant information, including personal details, identification, occupation, funding source, and political relations.
 * @export
 * @interface ApplicantRequest
 */
export interface ApplicantRequest {
    /**
     * 
     * @type {number}
     * @memberof ApplicantRequest
     */
    'flowId': number;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'requestBy'?: string | null;
    /**
     * The title code in the Thai language (คำนำหน้าชื่อ).
     * @type {string}
     * @memberof ApplicantRequest
     */
    'titleCodeTh': string;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'titleThOther'?: string | null;
    /**
     * The first name in the Thai language (ชื่อภาษาไทย).
     * @type {string}
     * @memberof ApplicantRequest
     */
    'firstNameTh': string;
    /**
     * The last name in the Thai language (นามสกุลภาษาไทย).
     * @type {string}
     * @memberof ApplicantRequest
     */
    'lastNameTh'?: string | null;
    /**
     * The first name in the English language.
     * @type {string}
     * @memberof ApplicantRequest
     */
    'firstNameEn': string;
    /**
     * The last name in the English language.
     * @type {string}
     * @memberof ApplicantRequest
     */
    'lastNameEn': string;
    /**
     * The type of person (ประเภทบุคคล).
     * @type {string}
     * @memberof ApplicantRequest
     */
    'personType': string;
    /**
     * The nationality code (สัญชาติ).
     * @type {string}
     * @memberof ApplicantRequest
     */
    'nationCode': string;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'nationDesc'?: string | null;
    /**
     * The reference ID (บัตรประชาชน).
     * @type {string}
     * @memberof ApplicantRequest
     */
    'referenceId': string;
    /**
     * The type of reference (ประเภทหลักฐาน).
     * @type {string}
     * @memberof ApplicantRequest
     */
    'referenceType': string;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'occupationCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'occupationDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'occupationOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'fundingSourceCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'fundingSourceDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'fundingSourceOther'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'businessTypeCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'businessTypeDesc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'businessTypeOther'?: string | null;
    /**
     * Indicates whether the applicant has relations with politicians (ผู้ใกล้ชิดกับนักการเมือง).
     * @type {boolean}
     * @memberof ApplicantRequest
     */
    'politicianRelationCode': boolean;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'politicianRelationDesc'?: string | null;
    /**
     * The method used to verify applicant information.
     * @type {string}
     * @memberof ApplicantRequest
     */
    'verifyMethod': string;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'createdBy'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicantRequest
     */
    'createdDate'?: string | null;
}

