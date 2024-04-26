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
import type { AttorneyInfoModel } from './AttorneyInfoModel';
import {
    AttorneyInfoModelFromJSON,
    AttorneyInfoModelFromJSONTyped,
    AttorneyInfoModelToJSON,
} from './AttorneyInfoModel';

/**
 * 
 * @export
 * @interface AttorneyInfoResponse
 */
export interface AttorneyInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {Array<AttorneyInfoModel>}
     * @memberof AttorneyInfoResponse
     */
    attorneyInfo?: Array<AttorneyInfoModel> | null;
}

/**
 * Check if a given object implements the AttorneyInfoResponse interface.
 */
export function instanceOfAttorneyInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttorneyInfoResponseFromJSON(json: any): AttorneyInfoResponse {
    return AttorneyInfoResponseFromJSONTyped(json, false);
}

export function AttorneyInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttorneyInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'attorneyInfo': !exists(json, 'attorneyInfo') ? undefined : (json['attorneyInfo'] === null ? null : (json['attorneyInfo'] as Array<any>).map(AttorneyInfoModelFromJSON)),
    };
}

export function AttorneyInfoResponseToJSON(value?: AttorneyInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'attorneyInfo': value.attorneyInfo === undefined ? undefined : (value.attorneyInfo === null ? null : (value.attorneyInfo as Array<any>).map(AttorneyInfoModelToJSON)),
    };
}

