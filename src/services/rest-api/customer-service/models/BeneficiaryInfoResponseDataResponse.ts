/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.268
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BeneficiaryInfoResponse } from './BeneficiaryInfoResponse';
import {
    BeneficiaryInfoResponseFromJSON,
    BeneficiaryInfoResponseFromJSONTyped,
    BeneficiaryInfoResponseToJSON,
} from './BeneficiaryInfoResponse';

/**
 * 
 * @export
 * @interface BeneficiaryInfoResponseDataResponse
 */
export interface BeneficiaryInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof BeneficiaryInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BeneficiaryInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {BeneficiaryInfoResponse}
     * @memberof BeneficiaryInfoResponseDataResponse
     */
    data?: BeneficiaryInfoResponse | null;
}

/**
 * Check if a given object implements the BeneficiaryInfoResponseDataResponse interface.
 */
export function instanceOfBeneficiaryInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BeneficiaryInfoResponseDataResponseFromJSON(json: any): BeneficiaryInfoResponseDataResponse {
    return BeneficiaryInfoResponseDataResponseFromJSONTyped(json, false);
}

export function BeneficiaryInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeneficiaryInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : BeneficiaryInfoResponseFromJSON(json['data']),
    };
}

export function BeneficiaryInfoResponseDataResponseToJSON(value?: BeneficiaryInfoResponseDataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'errors': value.errors,
        'message': value.message,
        'data': BeneficiaryInfoResponseToJSON(value.data),
    };
}
