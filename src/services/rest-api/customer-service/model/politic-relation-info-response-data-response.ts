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
import { PoliticRelationInfoResponse } from './politic-relation-info-response';

/**
 * 
 * @export
 * @interface PoliticRelationInfoResponseDataResponse
 */
export interface PoliticRelationInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof PoliticRelationInfoResponseDataResponse
     */
    'status'?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PoliticRelationInfoResponseDataResponse
     */
    'errors'?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof PoliticRelationInfoResponseDataResponse
     */
    'message'?: string | null;
    /**
     * 
     * @type {PoliticRelationInfoResponse}
     * @memberof PoliticRelationInfoResponseDataResponse
     */
    'data'?: PoliticRelationInfoResponse | null;
}

