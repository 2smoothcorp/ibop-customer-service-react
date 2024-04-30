/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.328
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OccupationInfoModel } from './OccupationInfoModel';
import {
    OccupationInfoModelFromJSON,
    OccupationInfoModelFromJSONTyped,
    OccupationInfoModelToJSON,
} from './OccupationInfoModel';

/**
 * 
 * @export
 * @interface OccupationInfoResponse
 */
export interface OccupationInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof OccupationInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OccupationInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {OccupationInfoModel}
     * @memberof OccupationInfoResponse
     */
    occupationInfo?: OccupationInfoModel | null;
}

/**
 * Check if a given object implements the OccupationInfoResponse interface.
 */
export function instanceOfOccupationInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OccupationInfoResponseFromJSON(json: any): OccupationInfoResponse {
    return OccupationInfoResponseFromJSONTyped(json, false);
}

export function OccupationInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OccupationInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'occupationInfo': !exists(json, 'occupationInfo') ? undefined : OccupationInfoModelFromJSON(json['occupationInfo']),
    };
}

export function OccupationInfoResponseToJSON(value?: OccupationInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'occupationInfo': OccupationInfoModelToJSON(value.occupationInfo),
    };
}

