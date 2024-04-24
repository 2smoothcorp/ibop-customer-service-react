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
 * @interface KycResultOutput
 */
export interface KycResultOutput {
    /**
     * 
     * @type {number}
     * @memberof KycResultOutput
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof KycResultOutput
     */
    applicantId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof KycResultOutput
     */
    ruleId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultOutput
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultOutput
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultOutput
     */
    firstNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultOutput
     */
    lastNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultOutput
     */
    ruleDescription?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycResultOutput
     */
    riskLevel?: number | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultOutput
     */
    riskLevelDesc?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycResultOutput
     */
    score?: number | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultOutput
     */
    remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultOutput
     */
    createdBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof KycResultOutput
     */
    createdDate?: Date | null;
}

/**
 * Check if a given object implements the KycResultOutput interface.
 */
export function instanceOfKycResultOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycResultOutputFromJSON(json: any): KycResultOutput {
    return KycResultOutputFromJSONTyped(json, false);
}

export function KycResultOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycResultOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'applicantId': !exists(json, 'applicantId') ? undefined : json['applicantId'],
        'ruleId': !exists(json, 'ruleId') ? undefined : json['ruleId'],
        'firstNameTh': !exists(json, 'firstNameTh') ? undefined : json['firstNameTh'],
        'lastNameTh': !exists(json, 'lastNameTh') ? undefined : json['lastNameTh'],
        'firstNameEn': !exists(json, 'firstNameEn') ? undefined : json['firstNameEn'],
        'lastNameEn': !exists(json, 'lastNameEn') ? undefined : json['lastNameEn'],
        'ruleDescription': !exists(json, 'ruleDescription') ? undefined : json['ruleDescription'],
        'riskLevel': !exists(json, 'riskLevel') ? undefined : json['riskLevel'],
        'riskLevelDesc': !exists(json, 'riskLevelDesc') ? undefined : json['riskLevelDesc'],
        'score': !exists(json, 'score') ? undefined : json['score'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdDate': !exists(json, 'createdDate') ? undefined : (json['createdDate'] === null ? null : new Date(json['createdDate'])),
    };
}

export function KycResultOutputToJSON(value?: KycResultOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'applicantId': value.applicantId,
        'ruleId': value.ruleId,
        'firstNameTh': value.firstNameTh,
        'lastNameTh': value.lastNameTh,
        'firstNameEn': value.firstNameEn,
        'lastNameEn': value.lastNameEn,
        'ruleDescription': value.ruleDescription,
        'riskLevel': value.riskLevel,
        'riskLevelDesc': value.riskLevelDesc,
        'score': value.score,
        'remark': value.remark,
        'createdBy': value.createdBy,
        'createdDate': value.createdDate === undefined ? undefined : (value.createdDate === null ? null : value.createdDate.toISOString()),
    };
}

