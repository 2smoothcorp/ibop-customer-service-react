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
 * @interface KycUpdateSpouseInfoCorporateIdPostRequest
 */
export interface KycUpdateSpouseInfoCorporateIdPostRequest {
    /**
     * 
     * @type {string}
     * @memberof KycUpdateSpouseInfoCorporateIdPostRequest
     */
    familyStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdateSpouseInfoCorporateIdPostRequest
     */
    spouseTitleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdateSpouseInfoCorporateIdPostRequest
     */
    spouseTitleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdateSpouseInfoCorporateIdPostRequest
     */
    spouseTitleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdateSpouseInfoCorporateIdPostRequest
     */
    spouseFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdateSpouseInfoCorporateIdPostRequest
     */
    spouseLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdateSpouseInfoCorporateIdPostRequest
     */
    spouseIdentityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdateSpouseInfoCorporateIdPostRequest
     */
    spouseReferenceType?: string | null;
}

/**
 * Check if a given object implements the KycUpdateSpouseInfoCorporateIdPostRequest interface.
 */
export function instanceOfKycUpdateSpouseInfoCorporateIdPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycUpdateSpouseInfoCorporateIdPostRequestFromJSON(json: any): KycUpdateSpouseInfoCorporateIdPostRequest {
    return KycUpdateSpouseInfoCorporateIdPostRequestFromJSONTyped(json, false);
}

export function KycUpdateSpouseInfoCorporateIdPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycUpdateSpouseInfoCorporateIdPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'familyStatus': !exists(json, 'familyStatus') ? undefined : json['familyStatus'],
        'spouseTitleCode': !exists(json, 'spouseTitleCode') ? undefined : json['spouseTitleCode'],
        'spouseTitleName': !exists(json, 'spouseTitleName') ? undefined : json['spouseTitleName'],
        'spouseTitleOther': !exists(json, 'spouseTitleOther') ? undefined : json['spouseTitleOther'],
        'spouseFirstName': !exists(json, 'spouseFirstName') ? undefined : json['spouseFirstName'],
        'spouseLastName': !exists(json, 'spouseLastName') ? undefined : json['spouseLastName'],
        'spouseIdentityId': !exists(json, 'spouseIdentityId') ? undefined : json['spouseIdentityId'],
        'spouseReferenceType': !exists(json, 'spouseReferenceType') ? undefined : json['spouseReferenceType'],
    };
}

export function KycUpdateSpouseInfoCorporateIdPostRequestToJSON(value?: KycUpdateSpouseInfoCorporateIdPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'familyStatus': value.familyStatus,
        'spouseTitleCode': value.spouseTitleCode,
        'spouseTitleName': value.spouseTitleName,
        'spouseTitleOther': value.spouseTitleOther,
        'spouseFirstName': value.spouseFirstName,
        'spouseLastName': value.spouseLastName,
        'spouseIdentityId': value.spouseIdentityId,
        'spouseReferenceType': value.spouseReferenceType,
    };
}

