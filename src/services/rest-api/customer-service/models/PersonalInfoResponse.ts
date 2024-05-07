/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.350
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PersonalInfoModel } from './PersonalInfoModel';
import {
    PersonalInfoModelFromJSON,
    PersonalInfoModelFromJSONTyped,
    PersonalInfoModelToJSON,
} from './PersonalInfoModel';

/**
 * 
 * @export
 * @interface PersonalInfoResponse
 */
export interface PersonalInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {PersonalInfoModel}
     * @memberof PersonalInfoResponse
     */
    personalInfo?: PersonalInfoModel | null;
}

/**
 * Check if a given object implements the PersonalInfoResponse interface.
 */
export function instanceOfPersonalInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonalInfoResponseFromJSON(json: any): PersonalInfoResponse {
    return PersonalInfoResponseFromJSONTyped(json, false);
}

export function PersonalInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'personalInfo': !exists(json, 'personalInfo') ? undefined : PersonalInfoModelFromJSON(json['personalInfo']),
    };
}

export function PersonalInfoResponseToJSON(value?: PersonalInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'personalInfo': PersonalInfoModelToJSON(value.personalInfo),
    };
}

