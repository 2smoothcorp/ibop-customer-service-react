/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.364
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BeneficiaryInfoModel } from './BeneficiaryInfoModel';
import {
    BeneficiaryInfoModelFromJSON,
    BeneficiaryInfoModelFromJSONTyped,
    BeneficiaryInfoModelToJSON,
} from './BeneficiaryInfoModel';

/**
 * 
 * @export
 * @interface BeneficiaryInfoResponse
 */
export interface BeneficiaryInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {BeneficiaryInfoModel}
     * @memberof BeneficiaryInfoResponse
     */
    beneficiaryInfo?: BeneficiaryInfoModel | null;
}

/**
 * Check if a given object implements the BeneficiaryInfoResponse interface.
 */
export function instanceOfBeneficiaryInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BeneficiaryInfoResponseFromJSON(json: any): BeneficiaryInfoResponse {
    return BeneficiaryInfoResponseFromJSONTyped(json, false);
}

export function BeneficiaryInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeneficiaryInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'beneficiaryInfo': !exists(json, 'beneficiaryInfo') ? undefined : BeneficiaryInfoModelFromJSON(json['beneficiaryInfo']),
    };
}

export function BeneficiaryInfoResponseToJSON(value?: BeneficiaryInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'beneficiaryInfo': BeneficiaryInfoModelToJSON(value.beneficiaryInfo),
    };
}

