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
import { EmergencyContactInfoResponse } from './emergency-contact-info-response';

/**
 * 
 * @export
 * @interface EmergencyContactInfoResponseDataResponse
 */
export interface EmergencyContactInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof EmergencyContactInfoResponseDataResponse
     */
    'status'?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof EmergencyContactInfoResponseDataResponse
     */
    'errors'?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoResponseDataResponse
     */
    'message'?: string | null;
    /**
     * 
     * @type {EmergencyContactInfoResponse}
     * @memberof EmergencyContactInfoResponseDataResponse
     */
    'data'?: EmergencyContactInfoResponse | null;
}

