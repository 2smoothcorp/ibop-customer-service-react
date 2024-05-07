/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.350
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { KycAddressInput } from './KycAddressInput';
import {
    KycAddressInputFromJSON,
    KycAddressInputFromJSONTyped,
    KycAddressInputToJSON,
} from './KycAddressInput';
import type { KycPersonalInput } from './KycPersonalInput';
import {
    KycPersonalInputFromJSON,
    KycPersonalInputFromJSONTyped,
    KycPersonalInputToJSON,
} from './KycPersonalInput';
import type { KycSpouseInput } from './KycSpouseInput';
import {
    KycSpouseInputFromJSON,
    KycSpouseInputFromJSONTyped,
    KycSpouseInputToJSON,
} from './KycSpouseInput';

/**
 * 
 * @export
 * @interface KycSaveCorporateIdPostRequest
 */
export interface KycSaveCorporateIdPostRequest {
    /**
     * 
     * @type {KycPersonalInput}
     * @memberof KycSaveCorporateIdPostRequest
     */
    kycPersonalInput?: KycPersonalInput | null;
    /**
     * 
     * @type {KycSpouseInput}
     * @memberof KycSaveCorporateIdPostRequest
     */
    kycSpouseInput?: KycSpouseInput | null;
    /**
     * 
     * @type {Array<KycAddressInput>}
     * @memberof KycSaveCorporateIdPostRequest
     */
    kycAddressInputs?: Array<KycAddressInput> | null;
}

/**
 * Check if a given object implements the KycSaveCorporateIdPostRequest interface.
 */
export function instanceOfKycSaveCorporateIdPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycSaveCorporateIdPostRequestFromJSON(json: any): KycSaveCorporateIdPostRequest {
    return KycSaveCorporateIdPostRequestFromJSONTyped(json, false);
}

export function KycSaveCorporateIdPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycSaveCorporateIdPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kycPersonalInput': !exists(json, 'kycPersonalInput') ? undefined : KycPersonalInputFromJSON(json['kycPersonalInput']),
        'kycSpouseInput': !exists(json, 'kycSpouseInput') ? undefined : KycSpouseInputFromJSON(json['kycSpouseInput']),
        'kycAddressInputs': !exists(json, 'kycAddressInputs') ? undefined : (json['kycAddressInputs'] === null ? null : (json['kycAddressInputs'] as Array<any>).map(KycAddressInputFromJSON)),
    };
}

export function KycSaveCorporateIdPostRequestToJSON(value?: KycSaveCorporateIdPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kycPersonalInput': KycPersonalInputToJSON(value.kycPersonalInput),
        'kycSpouseInput': KycSpouseInputToJSON(value.kycSpouseInput),
        'kycAddressInputs': value.kycAddressInputs === undefined ? undefined : (value.kycAddressInputs === null ? null : (value.kycAddressInputs as Array<any>).map(KycAddressInputToJSON)),
    };
}

