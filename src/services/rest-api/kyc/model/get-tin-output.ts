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
 * @interface GetTinOutput
 */
export interface GetTinOutput {
    /**
     * 
     * @type {number}
     * @memberof GetTinOutput
     */
    'customerForeignTaxId'?: number;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    'refId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    'refType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    'taxCountryCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    'tinNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    'noTinResonCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    'noTinReasonRemark'?: string | null;
}

