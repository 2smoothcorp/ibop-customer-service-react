/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.316
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
 * @interface OccupationInfoModel
 */
export interface OccupationInfoModel {
    /**
     * 
     * @type {string}
     * @memberof OccupationInfoModel
     */
    occupationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OccupationInfoModel
     */
    jobWorkPlace?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OccupationInfoModel
     */
    jobPosition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof OccupationInfoModel
     */
    jobDepartment?: string | null;
}

/**
 * Check if a given object implements the OccupationInfoModel interface.
 */
export function instanceOfOccupationInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OccupationInfoModelFromJSON(json: any): OccupationInfoModel {
    return OccupationInfoModelFromJSONTyped(json, false);
}

export function OccupationInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): OccupationInfoModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'occupationCode': !exists(json, 'occupationCode') ? undefined : json['occupationCode'],
        'jobWorkPlace': !exists(json, 'jobWorkPlace') ? undefined : json['jobWorkPlace'],
        'jobPosition': !exists(json, 'jobPosition') ? undefined : json['jobPosition'],
        'jobDepartment': !exists(json, 'jobDepartment') ? undefined : json['jobDepartment'],
    };
}

export function OccupationInfoModelToJSON(value?: OccupationInfoModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'occupationCode': value.occupationCode,
        'jobWorkPlace': value.jobWorkPlace,
        'jobPosition': value.jobPosition,
        'jobDepartment': value.jobDepartment,
    };
}

