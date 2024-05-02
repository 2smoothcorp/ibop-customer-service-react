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
 * @interface PermissionInfoOuput
 */
export interface PermissionInfoOuput {
    /**
     * 
     * @type {string}
     * @memberof PermissionInfoOuput
     */
    employeeId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionInfoOuput
     */
    nameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionInfoOuput
     */
    nameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionInfoOuput
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PermissionInfoOuput
     */
    isMaker?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof PermissionInfoOuput
     */
    isChecker?: boolean | null;
}

/**
 * Check if a given object implements the PermissionInfoOuput interface.
 */
export function instanceOfPermissionInfoOuput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PermissionInfoOuputFromJSON(json: any): PermissionInfoOuput {
    return PermissionInfoOuputFromJSONTyped(json, false);
}

export function PermissionInfoOuputFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermissionInfoOuput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'employeeId': !exists(json, 'employeeId') ? undefined : json['employeeId'],
        'nameTh': !exists(json, 'nameTh') ? undefined : json['nameTh'],
        'nameEn': !exists(json, 'nameEn') ? undefined : json['nameEn'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'isMaker': !exists(json, 'isMaker') ? undefined : json['isMaker'],
        'isChecker': !exists(json, 'isChecker') ? undefined : json['isChecker'],
    };
}

export function PermissionInfoOuputToJSON(value?: PermissionInfoOuput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'employeeId': value.employeeId,
        'nameTh': value.nameTh,
        'nameEn': value.nameEn,
        'email': value.email,
        'isMaker': value.isMaker,
        'isChecker': value.isChecker,
    };
}

