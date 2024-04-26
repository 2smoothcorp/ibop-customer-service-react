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
 * @interface Country
 */
export interface Country {
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    botcountryId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    countryNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    countryNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Country
     */
    logTimestamp?: Date | null;
}

/**
 * Check if a given object implements the Country interface.
 */
export function instanceOfCountry(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CountryFromJSON(json: any): Country {
    return CountryFromJSONTyped(json, false);
}

export function CountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Country {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'botcountryId': !exists(json, 'botcountryId') ? undefined : json['botcountryId'],
        'countryNameTh': !exists(json, 'countryNameTh') ? undefined : json['countryNameTh'],
        'countryNameEn': !exists(json, 'countryNameEn') ? undefined : json['countryNameEn'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
    };
}

export function CountryToJSON(value?: Country | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countryCode': value.countryCode,
        'botcountryId': value.botcountryId,
        'countryNameTh': value.countryNameTh,
        'countryNameEn': value.countryNameEn,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
    };
}

