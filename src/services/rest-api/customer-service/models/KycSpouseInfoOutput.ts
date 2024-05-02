/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.333
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
 * @interface KycSpouseInfoOutput
 */
export interface KycSpouseInfoOutput {
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutput
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutput
     */
    familyStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutput
     */
    spouseTitleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutput
     */
    spouseTitleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutput
     */
    spouseTitleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutput
     */
    spouseFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutput
     */
    spouseLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutput
     */
    spouseIdentityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutput
     */
    spouseReferenceType?: string | null;
}

/**
 * Check if a given object implements the KycSpouseInfoOutput interface.
 */
export function instanceOfKycSpouseInfoOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycSpouseInfoOutputFromJSON(json: any): KycSpouseInfoOutput {
    return KycSpouseInfoOutputFromJSONTyped(json, false);
}

export function KycSpouseInfoOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycSpouseInfoOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
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

export function KycSpouseInfoOutputToJSON(value?: KycSpouseInfoOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
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

