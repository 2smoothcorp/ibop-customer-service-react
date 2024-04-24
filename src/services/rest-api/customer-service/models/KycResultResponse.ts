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
import type { KycResultOutput } from './KycResultOutput';
import {
    KycResultOutputFromJSON,
    KycResultOutputFromJSONTyped,
    KycResultOutputToJSON,
} from './KycResultOutput';

/**
 * 
 * @export
 * @interface KycResultResponse
 */
export interface KycResultResponse {
    /**
     * 
     * @type {string}
     * @memberof KycResultResponse
     */
    riskLevel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultResponse
     */
    riskDescription?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycResultResponse
     */
    score?: number | null;
    /**
     * 
     * @type {Array<KycResultOutput>}
     * @memberof KycResultResponse
     */
    risks?: Array<KycResultOutput> | null;
}

/**
 * Check if a given object implements the KycResultResponse interface.
 */
export function instanceOfKycResultResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycResultResponseFromJSON(json: any): KycResultResponse {
    return KycResultResponseFromJSONTyped(json, false);
}

export function KycResultResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycResultResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'riskLevel': !exists(json, 'riskLevel') ? undefined : json['riskLevel'],
        'riskDescription': !exists(json, 'riskDescription') ? undefined : json['riskDescription'],
        'score': !exists(json, 'score') ? undefined : json['score'],
        'risks': !exists(json, 'risks') ? undefined : (json['risks'] === null ? null : (json['risks'] as Array<any>).map(KycResultOutputFromJSON)),
    };
}

export function KycResultResponseToJSON(value?: KycResultResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'riskLevel': value.riskLevel,
        'riskDescription': value.riskDescription,
        'score': value.score,
        'risks': value.risks === undefined ? undefined : (value.risks === null ? null : (value.risks as Array<any>).map(KycResultOutputToJSON)),
    };
}

