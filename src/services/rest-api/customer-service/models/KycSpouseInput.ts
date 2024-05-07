/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.350
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
 * @interface KycSpouseInput
 */
export interface KycSpouseInput {
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInput
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInput
     */
    familyStatus?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInput
     */
    spouseTitleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInput
     */
    spouseTitleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInput
     */
    spouseTitleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInput
     */
    spouseFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInput
     */
    spouseLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInput
     */
    spouseIdentityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInput
     */
    spouseReferenceType?: string | null;
}

/**
 * Check if a given object implements the KycSpouseInput interface.
 */
export function instanceOfKycSpouseInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycSpouseInputFromJSON(json: any): KycSpouseInput {
    return KycSpouseInputFromJSONTyped(json, false);
}

export function KycSpouseInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycSpouseInput {
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

export function KycSpouseInputToJSON(value?: KycSpouseInput | null): any {
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

