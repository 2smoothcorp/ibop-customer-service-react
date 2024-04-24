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
 * @interface Nation
 */
export interface Nation {
    /**
     * 
     * @type {string}
     * @memberof Nation
     */
    nationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Nation
     */
    botnationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Nation
     */
    nationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Nation
     */
    nationFlag?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Nation
     */
    createDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Nation
     */
    createUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Nation
     */
    updateDate?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof Nation
     */
    updateNo?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Nation
     */
    updateUser?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Nation
     */
    status?: string | null;
}

/**
 * Check if a given object implements the Nation interface.
 */
export function instanceOfNation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NationFromJSON(json: any): Nation {
    return NationFromJSONTyped(json, false);
}

export function NationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Nation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nationCode': !exists(json, 'nationCode') ? undefined : json['nationCode'],
        'botnationCode': !exists(json, 'botnationCode') ? undefined : json['botnationCode'],
        'nationDesc': !exists(json, 'nationDesc') ? undefined : json['nationDesc'],
        'nationFlag': !exists(json, 'nationFlag') ? undefined : json['nationFlag'],
        'createDate': !exists(json, 'createDate') ? undefined : (json['createDate'] === null ? null : new Date(json['createDate'])),
        'createUser': !exists(json, 'createUser') ? undefined : json['createUser'],
        'updateDate': !exists(json, 'updateDate') ? undefined : (json['updateDate'] === null ? null : new Date(json['updateDate'])),
        'updateNo': !exists(json, 'updateNo') ? undefined : json['updateNo'],
        'updateUser': !exists(json, 'updateUser') ? undefined : json['updateUser'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function NationToJSON(value?: Nation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nationCode': value.nationCode,
        'botnationCode': value.botnationCode,
        'nationDesc': value.nationDesc,
        'nationFlag': value.nationFlag,
        'createDate': value.createDate === undefined ? undefined : (value.createDate === null ? null : value.createDate.toISOString()),
        'createUser': value.createUser,
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate === null ? null : value.updateDate.toISOString()),
        'updateNo': value.updateNo,
        'updateUser': value.updateUser,
        'status': value.status,
    };
}

