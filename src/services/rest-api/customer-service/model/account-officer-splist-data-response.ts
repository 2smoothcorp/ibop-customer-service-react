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


// May contain unused imports in some cases
// @ts-ignore
import { AccountOfficerSP } from './account-officer-sp';

/**
 * 
 * @export
 * @interface AccountOfficerSPListDataResponse
 */
export interface AccountOfficerSPListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AccountOfficerSPListDataResponse
     */
    'status'?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AccountOfficerSPListDataResponse
     */
    'errors'?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AccountOfficerSPListDataResponse
     */
    'message'?: string | null;
    /**
     * 
     * @type {Array<AccountOfficerSP>}
     * @memberof AccountOfficerSPListDataResponse
     */
    'data'?: Array<AccountOfficerSP> | null;
}

