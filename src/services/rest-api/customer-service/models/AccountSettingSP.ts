/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.338
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
 * @interface AccountSettingSP
 */
export interface AccountSettingSP {
    /**
     * 
     * @type {string}
     * @memberof AccountSettingSP
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingSP
     */
    prefix?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingSP
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingSP
     */
    remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingSP
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingSP
     */
    logUser?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingSP
     */
    logTimeStamp?: string | null;
}

/**
 * Check if a given object implements the AccountSettingSP interface.
 */
export function instanceOfAccountSettingSP(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountSettingSPFromJSON(json: any): AccountSettingSP {
    return AccountSettingSPFromJSONTyped(json, false);
}

export function AccountSettingSPFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountSettingSP {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimeStamp': !exists(json, 'logTimeStamp') ? undefined : json['logTimeStamp'],
    };
}

export function AccountSettingSPToJSON(value?: AccountSettingSP | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'prefix': value.prefix,
        'status': value.status,
        'remark': value.remark,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimeStamp': value.logTimeStamp,
    };
}

