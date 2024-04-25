/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.300
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
 * @interface SpouseInfoModel
 */
export interface SpouseInfoModel {
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoModel
     */
    familyStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoModel
     */
    spouseReferenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoModel
     */
    referenceTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoModel
     */
    spouseIdentityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoModel
     */
    spouseTitleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoModel
     */
    spouseTitleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoModel
     */
    spouseFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoModel
     */
    spouseLastName?: string | null;
}

/**
 * Check if a given object implements the SpouseInfoModel interface.
 */
export function instanceOfSpouseInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SpouseInfoModelFromJSON(json: any): SpouseInfoModel {
    return SpouseInfoModelFromJSONTyped(json, false);
}

export function SpouseInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpouseInfoModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'familyStatus': !exists(json, 'familyStatus') ? undefined : json['familyStatus'],
        'spouseReferenceType': !exists(json, 'spouseReferenceType') ? undefined : json['spouseReferenceType'],
        'referenceTypeDesc': !exists(json, 'referenceTypeDesc') ? undefined : json['referenceTypeDesc'],
        'spouseIdentityId': !exists(json, 'spouseIdentityId') ? undefined : json['spouseIdentityId'],
        'spouseTitleCode': !exists(json, 'spouseTitleCode') ? undefined : json['spouseTitleCode'],
        'spouseTitleName': !exists(json, 'spouseTitleName') ? undefined : json['spouseTitleName'],
        'spouseFirstName': !exists(json, 'spouseFirstName') ? undefined : json['spouseFirstName'],
        'spouseLastName': !exists(json, 'spouseLastName') ? undefined : json['spouseLastName'],
    };
}

export function SpouseInfoModelToJSON(value?: SpouseInfoModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'familyStatus': value.familyStatus,
        'spouseReferenceType': value.spouseReferenceType,
        'referenceTypeDesc': value.referenceTypeDesc,
        'spouseIdentityId': value.spouseIdentityId,
        'spouseTitleCode': value.spouseTitleCode,
        'spouseTitleName': value.spouseTitleName,
        'spouseFirstName': value.spouseFirstName,
        'spouseLastName': value.spouseLastName,
    };
}

