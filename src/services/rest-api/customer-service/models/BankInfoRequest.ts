/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.328
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
 * @interface BankInfoRequest
 */
export interface BankInfoRequest {
    /**
     * 
     * @type {Array<BankInfoModel>}
     * @memberof BankInfoRequest
     */
    bankInfo?: Array<BankInfoModel> | null;
}

/**
 * Check if a given object implements the BankInfoRequest interface.
 */
export function instanceOfBankInfoRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BankInfoRequestFromJSON(json: any): BankInfoRequest {
    return BankInfoRequestFromJSONTyped(json, false);
}

export function BankInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankInfoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankInfo': !exists(json, 'bankInfo') ? undefined : (json['bankInfo'] === null ? null : (json['bankInfo'] as Array<any>).map(BankInfoModelFromJSON)),
    };
}

export function BankInfoRequestToJSON(value?: BankInfoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankInfo': value.bankInfo === undefined ? undefined : (value.bankInfo === null ? null : (value.bankInfo as Array<any>).map(BankInfoModelToJSON)),
    };
}
