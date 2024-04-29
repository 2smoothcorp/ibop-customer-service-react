/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.320
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
 * @interface AccountOfficerSP
 */
export interface AccountOfficerSP {
    /**
     * 
     * @type {string}
     * @memberof AccountOfficerSP
     */
    empCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountOfficerSP
     */
    role?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountOfficerSP
     */
    personNameTH?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountOfficerSP
     */
    personNameEN?: string | null;
}

/**
 * Check if a given object implements the AccountOfficerSP interface.
 */
export function instanceOfAccountOfficerSP(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountOfficerSPFromJSON(json: any): AccountOfficerSP {
    return AccountOfficerSPFromJSONTyped(json, false);
}

export function AccountOfficerSPFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOfficerSP {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'empCode': !exists(json, 'empCode') ? undefined : json['empCode'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'personNameTH': !exists(json, 'personNameTH') ? undefined : json['personNameTH'],
        'personNameEN': !exists(json, 'personNameEN') ? undefined : json['personNameEN'],
    };
}

export function AccountOfficerSPToJSON(value?: AccountOfficerSP | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'empCode': value.empCode,
        'role': value.role,
        'personNameTH': value.personNameTH,
        'personNameEN': value.personNameEN,
    };
}

