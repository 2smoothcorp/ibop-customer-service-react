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
import { AmloSearchOutput } from './amlo-search-output';

/**
 * 
 * @export
 * @interface AmloSearchOutputListDataResponse
 */
export interface AmloSearchOutputListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AmloSearchOutputListDataResponse
     */
    'status'?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AmloSearchOutputListDataResponse
     */
    'errors'?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AmloSearchOutputListDataResponse
     */
    'message'?: string | null;
    /**
     * 
     * @type {Array<AmloSearchOutput>}
     * @memberof AmloSearchOutputListDataResponse
     */
    'data'?: Array<AmloSearchOutput> | null;
}

