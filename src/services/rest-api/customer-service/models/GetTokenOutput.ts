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
 * @interface GetTokenOutput
 */
export interface GetTokenOutput {
    /**
     * 
     * @type {string}
     * @memberof GetTokenOutput
     */
    jwtTokenID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTokenOutput
     */
    jwtToken?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof GetTokenOutput
     */
    currentDateTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GetTokenOutput
     */
    expiredDateTime?: Date;
}

/**
 * Check if a given object implements the GetTokenOutput interface.
 */
export function instanceOfGetTokenOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetTokenOutputFromJSON(json: any): GetTokenOutput {
    return GetTokenOutputFromJSONTyped(json, false);
}

export function GetTokenOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTokenOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jwtTokenID': !exists(json, 'jwtTokenID') ? undefined : json['jwtTokenID'],
        'jwtToken': !exists(json, 'jwtToken') ? undefined : json['jwtToken'],
        'currentDateTime': !exists(json, 'currentDateTime') ? undefined : (new Date(json['currentDateTime'])),
        'expiredDateTime': !exists(json, 'expiredDateTime') ? undefined : (new Date(json['expiredDateTime'])),
    };
}

export function GetTokenOutputToJSON(value?: GetTokenOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jwtTokenID': value.jwtTokenID,
        'jwtToken': value.jwtToken,
        'currentDateTime': value.currentDateTime === undefined ? undefined : (value.currentDateTime.toISOString()),
        'expiredDateTime': value.expiredDateTime === undefined ? undefined : (value.expiredDateTime.toISOString()),
    };
}

