/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.316
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
 * @interface AccountSettingInput
 */
export interface AccountSettingInput {
    /**
     * 
     * @type {string}
     * @memberof AccountSettingInput
     */
    prefix?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingInput
     */
    newPrefix?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingInput
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingInput
     */
    remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingInput
     */
    logUser?: string | null;
}

/**
 * Check if a given object implements the AccountSettingInput interface.
 */
export function instanceOfAccountSettingInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountSettingInputFromJSON(json: any): AccountSettingInput {
    return AccountSettingInputFromJSONTyped(json, false);
}

export function AccountSettingInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountSettingInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'newPrefix': !exists(json, 'newPrefix') ? undefined : json['newPrefix'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
    };
}

export function AccountSettingInputToJSON(value?: AccountSettingInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prefix': value.prefix,
        'newPrefix': value.newPrefix,
        'status': value.status,
        'remark': value.remark,
        'logUser': value.logUser,
    };
}

