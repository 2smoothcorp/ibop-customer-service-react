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
import type { SpouseInfoModel } from './SpouseInfoModel';
import {
    SpouseInfoModelFromJSON,
    SpouseInfoModelFromJSONTyped,
    SpouseInfoModelToJSON,
} from './SpouseInfoModel';

/**
 * 
 * @export
 * @interface SpouseInfoResponse
 */
export interface SpouseInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {SpouseInfoModel}
     * @memberof SpouseInfoResponse
     */
    spouseInfo?: SpouseInfoModel | null;
}

/**
 * Check if a given object implements the SpouseInfoResponse interface.
 */
export function instanceOfSpouseInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SpouseInfoResponseFromJSON(json: any): SpouseInfoResponse {
    return SpouseInfoResponseFromJSONTyped(json, false);
}

export function SpouseInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpouseInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'spouseInfo': !exists(json, 'spouseInfo') ? undefined : SpouseInfoModelFromJSON(json['spouseInfo']),
    };
}

export function SpouseInfoResponseToJSON(value?: SpouseInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'spouseInfo': SpouseInfoModelToJSON(value.spouseInfo),
    };
}

