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
 * @interface Relation
 */
export interface Relation {
    /**
     * 
     * @type {string}
     * @memberof Relation
     */
    relationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Relation
     */
    relationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Relation
     */
    isSpecify?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Relation
     */
    orderBy?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Relation
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Relation
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Relation
     */
    logTimestamp?: Date | null;
}

/**
 * Check if a given object implements the Relation interface.
 */
export function instanceOfRelation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RelationFromJSON(json: any): Relation {
    return RelationFromJSONTyped(json, false);
}

export function RelationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Relation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'relationCode': !exists(json, 'relationCode') ? undefined : json['relationCode'],
        'relationDesc': !exists(json, 'relationDesc') ? undefined : json['relationDesc'],
        'isSpecify': !exists(json, 'isSpecify') ? undefined : json['isSpecify'],
        'orderBy': !exists(json, 'orderBy') ? undefined : json['orderBy'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
    };
}

export function RelationToJSON(value?: Relation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'relationCode': value.relationCode,
        'relationDesc': value.relationDesc,
        'isSpecify': value.isSpecify,
        'orderBy': value.orderBy,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
    };
}
