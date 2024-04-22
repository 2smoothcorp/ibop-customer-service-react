/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.272
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
 * @interface AccountInfoModel
 */
export interface AccountInfoModel {
    /**
     * 
     * @type {string}
     * @memberof AccountInfoModel
     */
    accountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountInfoModel
     */
    accountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountInfoModel
     */
    boAccountNo?: string | null;
}

/**
 * Check if a given object implements the AccountInfoModel interface.
 */
export function instanceOfAccountInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountInfoModelFromJSON(json: any): AccountInfoModel {
    return AccountInfoModelFromJSONTyped(json, false);
}

export function AccountInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountInfoModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'boAccountNo': !exists(json, 'boAccountNo') ? undefined : json['boAccountNo'],
    };
}

export function AccountInfoModelToJSON(value?: AccountInfoModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountType': value.accountType,
        'accountNo': value.accountNo,
        'boAccountNo': value.boAccountNo,
    };
}

