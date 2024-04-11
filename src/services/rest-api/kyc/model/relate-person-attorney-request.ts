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
 * Represents an attorney related to an applicant with detailed information, including personal and address details.
 * @export
 * @interface RelatePersonAttorneyRequest
 */
export interface RelatePersonAttorneyRequest {
    /**
     * The identifier of the associated applicant.
     * @type {number}
     * @memberof RelatePersonAttorneyRequest
     */
    'applicantId'?: number | null;
    /**
     * The type of the attorney, if applicable.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'type'?: string | null;
    /**
     * The first name of the attorney in the Thai language.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'firstNameTh'?: string | null;
    /**
     * The last name of the attorney in the Thai language.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'lastNameTh'?: string | null;
    /**
     * The first name of the attorney in the English language.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'firstNameEn'?: string | null;
    /**
     * The last name of the attorney in the English language.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'lastNameEn'?: string | null;
    /**
     * The reference identifier of the attorney.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'referenceId'?: string | null;
    /**
     * A description related to the reference of the attorney, if applicable.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'referenceDesc'?: string | null;
    /**
     * The nationality code of the attorney.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'nationCode'?: string | null;
    /**
     * The nationality description of the attorney.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'nationDesc'?: string | null;
    /**
     * Address details of the attorney, including address number, village, room, and more.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'addressNo'?: string | null;
    /**
     * The country code for the attorney\'s address.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'countryCode'?: string | null;
    /**
     * The postal code associated with the attorney\'s address.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'postCode'?: string | null;
    /**
     * Custom address details for the attorney, including custom address lines.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'customAddress1'?: string | null;
    /**
     * The creator or user who created the attorney information.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'createdBy'?: string | null;
    /**
     * The date when the attorney information was created.
     * @type {string}
     * @memberof RelatePersonAttorneyRequest
     */
    'createdDate'?: string | null;
}

