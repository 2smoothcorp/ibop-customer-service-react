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
import { AddressResponse } from './address-response';
// May contain unused imports in some cases
// @ts-ignore
import { ApplicantResponse } from './applicant-response';

/**
 * 
 * @export
 * @interface UspGetApplicantResponse
 */
export interface UspGetApplicantResponse {
    /**
     * 
     * @type {ApplicantResponse}
     * @memberof UspGetApplicantResponse
     */
    'applicant'?: ApplicantResponse;
    /**
     * 
     * @type {Array<AddressResponse>}
     * @memberof UspGetApplicantResponse
     */
    'address'?: Array<AddressResponse> | null;
}

