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
import type { BankInfoModel } from './BankInfoModel';
import {
    BankInfoModelFromJSON,
    BankInfoModelFromJSONTyped,
    BankInfoModelToJSON,
} from './BankInfoModel';

/**
 * 
 * @export
 * @interface BankInfoResponse
 */
export interface BankInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof BankInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {Array<BankInfoModel>}
     * @memberof BankInfoResponse
     */
    bankInfoModel?: Array<BankInfoModel> | null;
}

/**
 * Check if a given object implements the BankInfoResponse interface.
 */
export function instanceOfBankInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BankInfoResponseFromJSON(json: any): BankInfoResponse {
    return BankInfoResponseFromJSONTyped(json, false);
}

export function BankInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'bankInfoModel': !exists(json, 'bankInfoModel') ? undefined : (json['bankInfoModel'] === null ? null : (json['bankInfoModel'] as Array<any>).map(BankInfoModelFromJSON)),
    };
}

export function BankInfoResponseToJSON(value?: BankInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'bankInfoModel': value.bankInfoModel === undefined ? undefined : (value.bankInfoModel === null ? null : (value.bankInfoModel as Array<any>).map(BankInfoModelToJSON)),
    };
}

