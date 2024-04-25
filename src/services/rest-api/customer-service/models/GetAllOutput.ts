/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.299
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
 * @interface GetAllOutput
 */
export interface GetAllOutput {
    /**
     * 
     * @type {string}
     * @memberof GetAllOutput
     */
    accountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetAllOutput
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetAllOutput
     */
    accountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetAllOutput
     */
    boAccountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetAllOutput
     */
    boAccountNo?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetAllOutput
     */
    options?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof GetAllOutput
     */
    remark?: string | null;
}

/**
 * Check if a given object implements the GetAllOutput interface.
 */
export function instanceOfGetAllOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAllOutputFromJSON(json: any): GetAllOutput {
    return GetAllOutputFromJSONTyped(json, false);
}

export function GetAllOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'boAccountType': !exists(json, 'boAccountType') ? undefined : json['boAccountType'],
        'boAccountNo': !exists(json, 'boAccountNo') ? undefined : json['boAccountNo'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
    };
}

export function GetAllOutputToJSON(value?: GetAllOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountType': value.accountType,
        'status': value.status,
        'accountNo': value.accountNo,
        'boAccountType': value.boAccountType,
        'boAccountNo': value.boAccountNo,
        'options': value.options,
        'remark': value.remark,
    };
}

