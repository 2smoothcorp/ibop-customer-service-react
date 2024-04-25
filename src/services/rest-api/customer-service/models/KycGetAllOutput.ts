/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.305
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
 * @interface KycGetAllOutput
 */
export interface KycGetAllOutput {
    /**
     * 
     * @type {string}
     * @memberof KycGetAllOutput
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycGetAllOutput
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycGetAllOutput
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycGetAllOutput
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycGetAllOutput
     */
    kycRiskLevel?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycGetAllOutput
     */
    kycScore?: number | null;
    /**
     * 
     * @type {string}
     * @memberof KycGetAllOutput
     */
    kycRiskLevelDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycGetAllOutput
     */
    logUser?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycGetAllOutput
     */
    logUserDesc?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof KycGetAllOutput
     */
    logTimestamp?: Date | null;
}

/**
 * Check if a given object implements the KycGetAllOutput interface.
 */
export function instanceOfKycGetAllOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycGetAllOutputFromJSON(json: any): KycGetAllOutput {
    return KycGetAllOutputFromJSONTyped(json, false);
}

export function KycGetAllOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycGetAllOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'kycRiskLevel': !exists(json, 'kycRiskLevel') ? undefined : json['kycRiskLevel'],
        'kycScore': !exists(json, 'kycScore') ? undefined : json['kycScore'],
        'kycRiskLevelDescription': !exists(json, 'kycRiskLevelDescription') ? undefined : json['kycRiskLevelDescription'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logUserDesc': !exists(json, 'logUserDesc') ? undefined : json['logUserDesc'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
    };
}

export function KycGetAllOutputToJSON(value?: KycGetAllOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'name': value.name,
        'kycRiskLevel': value.kycRiskLevel,
        'kycScore': value.kycScore,
        'kycRiskLevelDescription': value.kycRiskLevelDescription,
        'logUser': value.logUser,
        'logUserDesc': value.logUserDesc,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
    };
}

