/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.298
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
 * @interface Title
 */
export interface Title {
    /**
     * 
     * @type {string}
     * @memberof Title
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Title
     */
    titleDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Title
     */
    isSpecify?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Title
     */
    orderBy?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Title
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Title
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Title
     */
    logTimestamp?: Date | null;
}

/**
 * Check if a given object implements the Title interface.
 */
export function instanceOfTitle(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TitleFromJSON(json: any): Title {
    return TitleFromJSONTyped(json, false);
}

export function TitleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Title {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
        'titleDesc': !exists(json, 'titleDesc') ? undefined : json['titleDesc'],
        'isSpecify': !exists(json, 'isSpecify') ? undefined : json['isSpecify'],
        'orderBy': !exists(json, 'orderBy') ? undefined : json['orderBy'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
    };
}

export function TitleToJSON(value?: Title | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'titleCode': value.titleCode,
        'titleDesc': value.titleDesc,
        'isSpecify': value.isSpecify,
        'orderBy': value.orderBy,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
    };
}

