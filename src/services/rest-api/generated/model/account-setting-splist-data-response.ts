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
import { AccountSettingSP } from './account-setting-sp';

/**
 * 
 * @export
 * @interface AccountSettingSPListDataResponse
 */
export interface AccountSettingSPListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AccountSettingSPListDataResponse
     */
    'status'?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AccountSettingSPListDataResponse
     */
    'errors'?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingSPListDataResponse
     */
    'message'?: string | null;
    /**
     * 
     * @type {Array<AccountSettingSP>}
     * @memberof AccountSettingSPListDataResponse
     */
    'data'?: Array<AccountSettingSP> | null;
}

