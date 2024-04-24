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
/**
 * 
 * @export
 * @interface EmergencyContactInfoOutput
 */
export interface EmergencyContactInfoOutput {
    /**
     * 
     * @type {number}
     * @memberof EmergencyContactInfoOutput
     */
    emergencyContactId?: number;
    /**
     * 
     * @type {number}
     * @memberof EmergencyContactInfoOutput
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoOutput
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoOutput
     */
    relationshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoOutput
     */
    relationshipDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoOutput
     */
    relationshipOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoOutput
     */
    mobile?: string | null;
}

/**
 * Check if a given object implements the EmergencyContactInfoOutput interface.
 */
export function instanceOfEmergencyContactInfoOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmergencyContactInfoOutputFromJSON(json: any): EmergencyContactInfoOutput {
    return EmergencyContactInfoOutputFromJSONTyped(json, false);
}

export function EmergencyContactInfoOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmergencyContactInfoOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emergencyContactId': !exists(json, 'emergencyContactId') ? undefined : json['emergencyContactId'],
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'relationshipCode': !exists(json, 'relationshipCode') ? undefined : json['relationshipCode'],
        'relationshipDesc': !exists(json, 'relationshipDesc') ? undefined : json['relationshipDesc'],
        'relationshipOther': !exists(json, 'relationshipOther') ? undefined : json['relationshipOther'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
    };
}

export function EmergencyContactInfoOutputToJSON(value?: EmergencyContactInfoOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emergencyContactId': value.emergencyContactId,
        'customerId': value.customerId,
        'name': value.name,
        'relationshipCode': value.relationshipCode,
        'relationshipDesc': value.relationshipDesc,
        'relationshipOther': value.relationshipOther,
        'mobile': value.mobile,
    };
}

