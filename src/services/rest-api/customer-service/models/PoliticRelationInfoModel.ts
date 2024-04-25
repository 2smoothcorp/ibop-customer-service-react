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
 * @interface PoliticRelationInfoModel
 */
export interface PoliticRelationInfoModel {
    /**
     * 
     * @type {boolean}
     * @memberof PoliticRelationInfoModel
     */
    politicianRelation?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PoliticRelationInfoModel
     */
    politicianFamily?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PoliticRelationInfoModel
     */
    politicianPosition?: string | null;
}

/**
 * Check if a given object implements the PoliticRelationInfoModel interface.
 */
export function instanceOfPoliticRelationInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PoliticRelationInfoModelFromJSON(json: any): PoliticRelationInfoModel {
    return PoliticRelationInfoModelFromJSONTyped(json, false);
}

export function PoliticRelationInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoliticRelationInfoModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'politicianRelation': !exists(json, 'politicianRelation') ? undefined : json['politicianRelation'],
        'politicianFamily': !exists(json, 'politicianFamily') ? undefined : json['politicianFamily'],
        'politicianPosition': !exists(json, 'politicianPosition') ? undefined : json['politicianPosition'],
    };
}

export function PoliticRelationInfoModelToJSON(value?: PoliticRelationInfoModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'politicianRelation': value.politicianRelation,
        'politicianFamily': value.politicianFamily,
        'politicianPosition': value.politicianPosition,
    };
}

