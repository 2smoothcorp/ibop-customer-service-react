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
import type { EmergencyContactInfoModel } from './EmergencyContactInfoModel';
import {
    EmergencyContactInfoModelFromJSON,
    EmergencyContactInfoModelFromJSONTyped,
    EmergencyContactInfoModelToJSON,
} from './EmergencyContactInfoModel';

/**
 * 
 * @export
 * @interface EmergencyContactInfoResponse
 */
export interface EmergencyContactInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {Array<EmergencyContactInfoModel>}
     * @memberof EmergencyContactInfoResponse
     */
    emergencyContactInfo?: Array<EmergencyContactInfoModel> | null;
}

/**
 * Check if a given object implements the EmergencyContactInfoResponse interface.
 */
export function instanceOfEmergencyContactInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmergencyContactInfoResponseFromJSON(json: any): EmergencyContactInfoResponse {
    return EmergencyContactInfoResponseFromJSONTyped(json, false);
}

export function EmergencyContactInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmergencyContactInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'emergencyContactInfo': !exists(json, 'emergencyContactInfo') ? undefined : (json['emergencyContactInfo'] === null ? null : (json['emergencyContactInfo'] as Array<any>).map(EmergencyContactInfoModelFromJSON)),
    };
}

export function EmergencyContactInfoResponseToJSON(value?: EmergencyContactInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'emergencyContactInfo': value.emergencyContactInfo === undefined ? undefined : (value.emergencyContactInfo === null ? null : (value.emergencyContactInfo as Array<any>).map(EmergencyContactInfoModelToJSON)),
    };
}
