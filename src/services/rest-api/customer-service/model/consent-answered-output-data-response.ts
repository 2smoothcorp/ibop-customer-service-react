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
import { ConsentAnsweredOutput } from './consent-answered-output';

/**
 * 
 * @export
 * @interface ConsentAnsweredOutputDataResponse
 */
export interface ConsentAnsweredOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof ConsentAnsweredOutputDataResponse
     */
    'status'?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ConsentAnsweredOutputDataResponse
     */
    'errors'?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentAnsweredOutputDataResponse
     */
    'message'?: string | null;
    /**
     * 
     * @type {ConsentAnsweredOutput}
     * @memberof ConsentAnsweredOutputDataResponse
     */
    'data'?: ConsentAnsweredOutput | null;
}

