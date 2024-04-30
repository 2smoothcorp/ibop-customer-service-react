/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.328
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
 * @interface AccountSettingCreatePostRequest
 */
export interface AccountSettingCreatePostRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountSettingCreatePostRequest
     */
    prefix?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingCreatePostRequest
     */
    newPrefix?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingCreatePostRequest
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingCreatePostRequest
     */
    remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingCreatePostRequest
     */
    logUser?: string | null;
}

/**
 * Check if a given object implements the AccountSettingCreatePostRequest interface.
 */
export function instanceOfAccountSettingCreatePostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountSettingCreatePostRequestFromJSON(json: any): AccountSettingCreatePostRequest {
    return AccountSettingCreatePostRequestFromJSONTyped(json, false);
}

export function AccountSettingCreatePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountSettingCreatePostRequest {
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

export function AccountSettingCreatePostRequestToJSON(value?: AccountSettingCreatePostRequest | null): any {
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

