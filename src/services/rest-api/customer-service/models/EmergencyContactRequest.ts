/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.299
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface EmergencyContactRequest
 */
export interface EmergencyContactRequest {
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactRequest
     */
    relationshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactRequest
     */
    relationshipOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactRequest
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactRequest
     */
    createdBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof EmergencyContactRequest
     */
    createdDatetime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactRequest
     */
    modifiedBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof EmergencyContactRequest
     */
    modifiedDatetime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactRequest
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactRequest
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof EmergencyContactRequest
     */
    logTimestamp?: Date | null;
}

/**
 * Check if a given object implements the EmergencyContactRequest interface.
 */
export function instanceOfEmergencyContactRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmergencyContactRequestFromJSON(json: any): EmergencyContactRequest {
    return EmergencyContactRequestFromJSONTyped(json, false);
}

export function EmergencyContactRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmergencyContactRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'relationshipCode': !exists(json, 'relationshipCode') ? undefined : json['relationshipCode'],
        'relationshipOther': !exists(json, 'relationshipOther') ? undefined : json['relationshipOther'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdDatetime': !exists(json, 'createdDatetime') ? undefined : (json['createdDatetime'] === null ? null : new Date(json['createdDatetime'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : json['modifiedBy'],
        'modifiedDatetime': !exists(json, 'modifiedDatetime') ? undefined : (json['modifiedDatetime'] === null ? null : new Date(json['modifiedDatetime'])),
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
    };
}

export function EmergencyContactRequestToJSON(value?: EmergencyContactRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'relationshipCode': value.relationshipCode,
        'relationshipOther': value.relationshipOther,
        'mobile': value.mobile,
        'createdBy': value.createdBy,
        'createdDatetime': value.createdDatetime === undefined ? undefined : (value.createdDatetime === null ? null : value.createdDatetime.toISOString()),
        'modifiedBy': value.modifiedBy,
        'modifiedDatetime': value.modifiedDatetime === undefined ? undefined : (value.modifiedDatetime === null ? null : value.modifiedDatetime.toISOString()),
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
    };
}

