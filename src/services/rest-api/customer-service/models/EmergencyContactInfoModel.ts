/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.300
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
 * @interface EmergencyContactInfoModel
 */
export interface EmergencyContactInfoModel {
    /**
     * 
     * @type {number}
     * @memberof EmergencyContactInfoModel
     */
    emergencyContactId?: number;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoModel
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoModel
     */
    relationshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoModel
     */
    relationshipOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoModel
     */
    relationship?: string | null;
}

/**
 * Check if a given object implements the EmergencyContactInfoModel interface.
 */
export function instanceOfEmergencyContactInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmergencyContactInfoModelFromJSON(json: any): EmergencyContactInfoModel {
    return EmergencyContactInfoModelFromJSONTyped(json, false);
}

export function EmergencyContactInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmergencyContactInfoModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emergencyContactId': !exists(json, 'emergencyContactId') ? undefined : json['emergencyContactId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'relationshipCode': !exists(json, 'relationshipCode') ? undefined : json['relationshipCode'],
        'relationshipOther': !exists(json, 'relationshipOther') ? undefined : json['relationshipOther'],
        'relationship': !exists(json, 'relationship') ? undefined : json['relationship'],
    };
}

export function EmergencyContactInfoModelToJSON(value?: EmergencyContactInfoModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emergencyContactId': value.emergencyContactId,
        'name': value.name,
        'mobile': value.mobile,
        'relationshipCode': value.relationshipCode,
        'relationshipOther': value.relationshipOther,
        'relationship': value.relationship,
    };
}

