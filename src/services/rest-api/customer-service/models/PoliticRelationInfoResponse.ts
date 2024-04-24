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
import type { PoliticRelationInfoModel } from './PoliticRelationInfoModel';
import {
    PoliticRelationInfoModelFromJSON,
    PoliticRelationInfoModelFromJSONTyped,
    PoliticRelationInfoModelToJSON,
} from './PoliticRelationInfoModel';

/**
 * 
 * @export
 * @interface PoliticRelationInfoResponse
 */
export interface PoliticRelationInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof PoliticRelationInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PoliticRelationInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {PoliticRelationInfoModel}
     * @memberof PoliticRelationInfoResponse
     */
    politicRelationInfo?: PoliticRelationInfoModel | null;
}

/**
 * Check if a given object implements the PoliticRelationInfoResponse interface.
 */
export function instanceOfPoliticRelationInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PoliticRelationInfoResponseFromJSON(json: any): PoliticRelationInfoResponse {
    return PoliticRelationInfoResponseFromJSONTyped(json, false);
}

export function PoliticRelationInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoliticRelationInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'politicRelationInfo': !exists(json, 'politicRelationInfo') ? undefined : PoliticRelationInfoModelFromJSON(json['politicRelationInfo']),
    };
}

export function PoliticRelationInfoResponseToJSON(value?: PoliticRelationInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'politicRelationInfo': PoliticRelationInfoModelToJSON(value.politicRelationInfo),
    };
}

