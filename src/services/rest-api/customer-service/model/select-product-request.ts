/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.242
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SelectProductRequest
 */
export interface SelectProductRequest {
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'accountNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'accountType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'options'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SelectProductRequest
     */
    'isReserveAccountNo'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'atsBankCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'atsBankShortName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'atsAccountNo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'eDividendBankCode'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'eDividendBankShortName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'eDividendAccountNo'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SelectProductRequest
     */
    'estCreditLine'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    'status'?: string | null;
}

