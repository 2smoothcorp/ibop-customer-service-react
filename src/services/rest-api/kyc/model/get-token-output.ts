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
 * @interface GetTokenOutput
 */
export interface GetTokenOutput {
    /**
     * 
     * @type {string}
     * @memberof GetTokenOutput
     */
    'jwtTokenID'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTokenOutput
     */
    'jwtToken'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTokenOutput
     */
    'currentDateTime'?: string;
    /**
     * 
     * @type {string}
     * @memberof GetTokenOutput
     */
    'expiredDateTime'?: string;
}
