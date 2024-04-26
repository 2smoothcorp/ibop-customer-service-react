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
/**
 * 
 * @export
 * @interface AccountOfficerInput
 */
export interface AccountOfficerInput {
    /**
     * 
     * @type {string}
     * @memberof AccountOfficerInput
     */
    empCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountOfficerInput
     */
    role?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountOfficerInput
     */
    employeeID?: string | null;
}

/**
 * Check if a given object implements the AccountOfficerInput interface.
 */
export function instanceOfAccountOfficerInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountOfficerInputFromJSON(json: any): AccountOfficerInput {
    return AccountOfficerInputFromJSONTyped(json, false);
}

export function AccountOfficerInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOfficerInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'empCode': !exists(json, 'empCode') ? undefined : json['empCode'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'employeeID': !exists(json, 'employeeID') ? undefined : json['employeeID'],
    };
}

export function AccountOfficerInputToJSON(value?: AccountOfficerInput | null): any {
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

