/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.333
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
 * @interface MaintenanceAccountOfficerPutRequest
 */
export interface MaintenanceAccountOfficerPutRequest {
    /**
     * 
     * @type {string}
     * @memberof MaintenanceAccountOfficerPutRequest
     */
    empCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MaintenanceAccountOfficerPutRequest
     */
    role?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MaintenanceAccountOfficerPutRequest
     */
    employeeID?: string | null;
}

/**
 * Check if a given object implements the MaintenanceAccountOfficerPutRequest interface.
 */
export function instanceOfMaintenanceAccountOfficerPutRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MaintenanceAccountOfficerPutRequestFromJSON(json: any): MaintenanceAccountOfficerPutRequest {
    return MaintenanceAccountOfficerPutRequestFromJSONTyped(json, false);
}

export function MaintenanceAccountOfficerPutRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MaintenanceAccountOfficerPutRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'empCode': !exists(json, 'empCode') ? undefined : json['empCode'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'employeeID': !exists(json, 'employeeID') ? undefined : json['employeeID'],
    };
}

export function MaintenanceAccountOfficerPutRequestToJSON(value?: MaintenanceAccountOfficerPutRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'empCode': value.empCode,
        'role': value.role,
        'employeeID': value.employeeID,
    };
}

