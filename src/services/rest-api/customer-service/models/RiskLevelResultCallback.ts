/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.330
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RiskLevelResponse } from './RiskLevelResponse';
import {
    RiskLevelResponseFromJSON,
    RiskLevelResponseFromJSONTyped,
    RiskLevelResponseToJSON,
} from './RiskLevelResponse';

/**
 * 
 * @export
 * @interface RiskLevelResultCallback
 */
export interface RiskLevelResultCallback {
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResultCallback
     */
    riskLevel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResultCallback
     */
    riskDescription?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RiskLevelResultCallback
     */
    score?: number | null;
    /**
     * 
     * @type {Array<RiskLevelResponse>}
     * @memberof RiskLevelResultCallback
     */
    risks?: Array<RiskLevelResponse> | null;
    /**
     * 
     * @type {Date}
     * @memberof RiskLevelResultCallback
     */
    startDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof RiskLevelResultCallback
     */
    endDate?: Date | null;
}

/**
 * Check if a given object implements the RiskLevelResultCallback interface.
 */
export function instanceOfRiskLevelResultCallback(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RiskLevelResultCallbackFromJSON(json: any): RiskLevelResultCallback {
    return RiskLevelResultCallbackFromJSONTyped(json, false);
}

export function RiskLevelResultCallbackFromJSONTyped(json: any, ignoreDiscriminator: boolean): RiskLevelResultCallback {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'riskLevel': !exists(json, 'riskLevel') ? undefined : json['riskLevel'],
        'riskDescription': !exists(json, 'riskDescription') ? undefined : json['riskDescription'],
        'score': !exists(json, 'score') ? undefined : json['score'],
        'risks': !exists(json, 'risks') ? undefined : (json['risks'] === null ? null : (json['risks'] as Array<any>).map(RiskLevelResponseFromJSON)),
        'startDate': !exists(json, 'startDate') ? undefined : (json['startDate'] === null ? null : new Date(json['startDate'])),
        'endDate': !exists(json, 'endDate') ? undefined : (json['endDate'] === null ? null : new Date(json['endDate'])),
    };
}

export function RiskLevelResultCallbackToJSON(value?: RiskLevelResultCallback | null): any {
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
        'risks': value.risks === undefined ? undefined : (value.risks === null ? null : (value.risks as Array<any>).map(RiskLevelResponseToJSON)),
        'startDate': value.startDate === undefined ? undefined : (value.startDate === null ? null : value.startDate.toISOString()),
        'endDate': value.endDate === undefined ? undefined : (value.endDate === null ? null : value.endDate.toISOString()),
    };
}

