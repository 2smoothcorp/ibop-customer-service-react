/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.299
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountInfoModel } from './AccountInfoModel';
import {
    AccountInfoModelFromJSON,
    AccountInfoModelFromJSONTyped,
    AccountInfoModelToJSON,
} from './AccountInfoModel';

/**
 * 
 * @export
 * @interface AccountInfoResponse
 */
export interface AccountInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {Array<AccountInfoModel>}
     * @memberof AccountInfoResponse
     */
    accountInfo?: Array<AccountInfoModel> | null;
}

/**
 * Check if a given object implements the AccountInfoResponse interface.
 */
export function instanceOfAccountInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountInfoResponseFromJSON(json: any): AccountInfoResponse {
    return AccountInfoResponseFromJSONTyped(json, false);
}

export function AccountInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'accountInfo': !exists(json, 'accountInfo') ? undefined : (json['accountInfo'] === null ? null : (json['accountInfo'] as Array<any>).map(AccountInfoModelFromJSON)),
    };
}

export function AccountInfoResponseToJSON(value?: AccountInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'accountInfo': value.accountInfo === undefined ? undefined : (value.accountInfo === null ? null : (value.accountInfo as Array<any>).map(AccountInfoModelToJSON)),
    };
}

