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


// May contain unused imports in some cases
// @ts-ignore
import { Compliance } from './compliance';

/**
 * 
 * @export
 * @interface ComplianceDataResponse
 */
export interface ComplianceDataResponse {
    /**
     * 
     * @type {number}
     * @memberof ComplianceDataResponse
     */
    'status'?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ComplianceDataResponse
     */
    'errors'?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof ComplianceDataResponse
     */
    'message'?: string | null;
    /**
     * 
     * @type {Compliance}
     * @memberof ComplianceDataResponse
     */
    'data'?: Compliance;
}
