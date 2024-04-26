/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.313
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BeneficiaryOutput } from './BeneficiaryOutput';
import {
    BeneficiaryOutputFromJSON,
    BeneficiaryOutputFromJSONTyped,
    BeneficiaryOutputToJSON,
} from './BeneficiaryOutput';

/**
 * 
 * @export
 * @interface BeneficiaryOutputDataResponse
 */
export interface BeneficiaryOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof BeneficiaryOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BeneficiaryOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {BeneficiaryOutput}
     * @memberof BeneficiaryOutputDataResponse
     */
    data?: BeneficiaryOutput | null;
}

/**
 * Check if a given object implements the BeneficiaryOutputDataResponse interface.
 */
export function instanceOfBeneficiaryOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BeneficiaryOutputDataResponseFromJSON(json: any): BeneficiaryOutputDataResponse {
    return BeneficiaryOutputDataResponseFromJSONTyped(json, false);
}

export function BeneficiaryOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeneficiaryOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : BeneficiaryOutputFromJSON(json['data']),
    };
}

export function BeneficiaryOutputDataResponseToJSON(value?: BeneficiaryOutputDataResponse | null): any {
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
        'data': BeneficiaryOutputToJSON(value.data),
    };
}

