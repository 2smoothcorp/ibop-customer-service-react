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
import type { AddressInfoModel } from './AddressInfoModel';
import {
    AddressInfoModelFromJSON,
    AddressInfoModelFromJSONTyped,
    AddressInfoModelToJSON,
} from './AddressInfoModel';

/**
 * 
 * @export
 * @interface AddressInfoResponse
 */
export interface AddressInfoResponse {
    /**
     * 
     * @type {string}
     * @memberof AddressInfoResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {AddressInfoModel}
     * @memberof AddressInfoResponse
     */
    addressInfoModel?: AddressInfoModel | null;
}

/**
 * Check if a given object implements the AddressInfoResponse interface.
 */
export function instanceOfAddressInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressInfoResponseFromJSON(json: any): AddressInfoResponse {
    return AddressInfoResponseFromJSONTyped(json, false);
}

export function AddressInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'addressInfoModel': !exists(json, 'addressInfoModel') ? undefined : AddressInfoModelFromJSON(json['addressInfoModel']),
    };
}

export function AddressInfoResponseToJSON(value?: AddressInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'addressInfoModel': AddressInfoModelToJSON(value.addressInfoModel),
    };
}

