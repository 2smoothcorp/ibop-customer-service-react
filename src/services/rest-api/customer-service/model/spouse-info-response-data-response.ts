/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.267
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { SpouseInfoResponse } from './spouse-info-response';

/**
 * 
 * @export
 * @interface SpouseInfoResponseDataResponse
 */
export interface SpouseInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof SpouseInfoResponseDataResponse
     */
    'status'?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof SpouseInfoResponseDataResponse
     */
    'errors'?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoResponseDataResponse
     */
    'message'?: string | null;
    /**
     * 
     * @type {SpouseInfoResponse}
     * @memberof SpouseInfoResponseDataResponse
     */
    'data'?: SpouseInfoResponse | null;
}

