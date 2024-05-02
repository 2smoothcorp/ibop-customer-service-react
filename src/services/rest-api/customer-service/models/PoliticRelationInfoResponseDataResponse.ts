/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.330
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PoliticRelationInfoResponse } from './PoliticRelationInfoResponse';
import {
    PoliticRelationInfoResponseFromJSON,
    PoliticRelationInfoResponseFromJSONTyped,
    PoliticRelationInfoResponseToJSON,
} from './PoliticRelationInfoResponse';

/**
 * 
 * @export
 * @interface PoliticRelationInfoResponseDataResponse
 */
export interface PoliticRelationInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof PoliticRelationInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PoliticRelationInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof PoliticRelationInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {PoliticRelationInfoResponse}
     * @memberof PoliticRelationInfoResponseDataResponse
     */
    data?: PoliticRelationInfoResponse | null;
}

/**
 * Check if a given object implements the PoliticRelationInfoResponseDataResponse interface.
 */
export function instanceOfPoliticRelationInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PoliticRelationInfoResponseDataResponseFromJSON(json: any): PoliticRelationInfoResponseDataResponse {
    return PoliticRelationInfoResponseDataResponseFromJSONTyped(json, false);
}

export function PoliticRelationInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoliticRelationInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : PoliticRelationInfoResponseFromJSON(json['data']),
    };
}

export function PoliticRelationInfoResponseDataResponseToJSON(value?: PoliticRelationInfoResponseDataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'errors': value.errors,
        'message': value.message,
        'data': PoliticRelationInfoResponseToJSON(value.data),
    };
}

