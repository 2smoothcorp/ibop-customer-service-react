/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.294
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { KycBeneficiaryInfoOutput } from './KycBeneficiaryInfoOutput';
import {
    KycBeneficiaryInfoOutputFromJSON,
    KycBeneficiaryInfoOutputFromJSONTyped,
    KycBeneficiaryInfoOutputToJSON,
} from './KycBeneficiaryInfoOutput';

/**
 * 
 * @export
 * @interface KycBeneficiaryInfoOutputDataResponse
 */
export interface KycBeneficiaryInfoOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof KycBeneficiaryInfoOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof KycBeneficiaryInfoOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {KycBeneficiaryInfoOutput}
     * @memberof KycBeneficiaryInfoOutputDataResponse
     */
    data?: KycBeneficiaryInfoOutput | null;
}

/**
 * Check if a given object implements the KycBeneficiaryInfoOutputDataResponse interface.
 */
export function instanceOfKycBeneficiaryInfoOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycBeneficiaryInfoOutputDataResponseFromJSON(json: any): KycBeneficiaryInfoOutputDataResponse {
    return KycBeneficiaryInfoOutputDataResponseFromJSONTyped(json, false);
}

export function KycBeneficiaryInfoOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycBeneficiaryInfoOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : KycBeneficiaryInfoOutputFromJSON(json['data']),
    };
}

export function KycBeneficiaryInfoOutputDataResponseToJSON(value?: KycBeneficiaryInfoOutputDataResponse | null): any {
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
        'data': KycBeneficiaryInfoOutputToJSON(value.data),
    };
}

