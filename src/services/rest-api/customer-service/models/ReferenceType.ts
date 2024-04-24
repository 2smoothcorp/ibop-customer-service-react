/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.286
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
 * @interface ReferenceType
 */
export interface ReferenceType {
    /**
     * 
     * @type {string}
     * @memberof ReferenceType
     */
    referenceTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferenceType
     */
    referenceTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferenceType
     */
    botUniqueIdType?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ReferenceType
     */
    createDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ReferenceType
     */
    createUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ReferenceType
     */
    updateDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof ReferenceType
     */
    updateNo?: number;
    /**
     * 
     * @type {string}
     * @memberof ReferenceType
     */
    updateUser?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReferenceType
     */
    status?: string | null;
}

/**
 * Check if a given object implements the ReferenceType interface.
 */
export function instanceOfReferenceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReferenceTypeFromJSON(json: any): ReferenceType {
    return ReferenceTypeFromJSONTyped(json, false);
}

export function ReferenceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceTypeCode': !exists(json, 'referenceTypeCode') ? undefined : json['referenceTypeCode'],
        'referenceTypeDesc': !exists(json, 'referenceTypeDesc') ? undefined : json['referenceTypeDesc'],
        'botUniqueIdType': !exists(json, 'botUniqueIdType') ? undefined : json['botUniqueIdType'],
        'createDate': !exists(json, 'createDate') ? undefined : (new Date(json['createDate'])),
        'createUser': !exists(json, 'createUser') ? undefined : json['createUser'],
        'updateDate': !exists(json, 'updateDate') ? undefined : (new Date(json['updateDate'])),
        'updateNo': !exists(json, 'updateNo') ? undefined : json['updateNo'],
        'updateUser': !exists(json, 'updateUser') ? undefined : json['updateUser'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function ReferenceTypeToJSON(value?: ReferenceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'referenceTypeCode': value.referenceTypeCode,
        'referenceTypeDesc': value.referenceTypeDesc,
        'botUniqueIdType': value.botUniqueIdType,
        'createDate': value.createDate === undefined ? undefined : (value.createDate.toISOString()),
        'createUser': value.createUser,
        'updateDate': value.updateDate === undefined ? undefined : (value.updateDate.toISOString()),
        'updateNo': value.updateNo,
        'updateUser': value.updateUser,
        'status': value.status,
    };
}

