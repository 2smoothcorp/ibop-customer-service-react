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
 * @interface RiskLevelResponse
 */
export interface RiskLevelResponse {
    /**
     * 
     * @type {number}
     * @memberof RiskLevelResponse
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof RiskLevelResponse
     */
    applicantId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof RiskLevelResponse
     */
    ruleId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResponse
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResponse
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResponse
     */
    firstNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResponse
     */
    lastNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResponse
     */
    ruleDescription?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RiskLevelResponse
     */
    riskLevel?: number | null;
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResponse
     */
    riskLevelDesc?: string | null;
    /**
     * 
     * @type {number}
     * @memberof RiskLevelResponse
     */
    score?: number | null;
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResponse
     */
    remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RiskLevelResponse
     */
    createdBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof RiskLevelResponse
     */
    createdDate?: Date | null;
}

/**
 * Check if a given object implements the RiskLevelResponse interface.
 */
export function instanceOfRiskLevelResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RiskLevelResponseFromJSON(json: any): RiskLevelResponse {
    return RiskLevelResponseFromJSONTyped(json, false);
}

export function RiskLevelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RiskLevelResponse {
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

export function RiskLevelResponseToJSON(value?: RiskLevelResponse | null): any {
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

