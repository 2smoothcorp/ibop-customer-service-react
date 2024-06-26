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
 * @interface Compliance
 */
export interface Compliance {
    /**
     * 
     * @type {number}
     * @memberof Compliance
     */
    'complianceId'?: number;
    /**
     * 
     * @type {number}
     * @memberof Compliance
     */
    'applicantId'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Compliance
     */
    'isMonetarySource'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Compliance
     */
    'isEstablishedPurpose'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof Compliance
     */
    'isFinancialCredibility'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof Compliance
     */
    'verifyIc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Compliance
     */
    'reasonIc'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Compliance
     */
    'verifyManager'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Compliance
     */
    'reasonManager'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Compliance
     */
    'isApproved'?: boolean | null;
}

