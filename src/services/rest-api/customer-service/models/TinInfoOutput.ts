/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.300
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GetTinOutput } from './GetTinOutput';
import {
    GetTinOutputFromJSON,
    GetTinOutputFromJSONTyped,
    GetTinOutputToJSON,
} from './GetTinOutput';

/**
 * 
 * @export
 * @interface TinInfoOutput
 */
export interface TinInfoOutput {
    /**
     * 
     * @type {boolean}
     * @memberof TinInfoOutput
     */
    isFatcaIndividualSelfCert?: boolean | null;
    /**
     * 
     * @type {Array<GetTinOutput>}
     * @memberof TinInfoOutput
     */
    tins?: Array<GetTinOutput> | null;
}

/**
 * Check if a given object implements the TinInfoOutput interface.
 */
export function instanceOfTinInfoOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TinInfoOutputFromJSON(json: any): TinInfoOutput {
    return TinInfoOutputFromJSONTyped(json, false);
}

export function TinInfoOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): TinInfoOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isFatcaIndividualSelfCert': !exists(json, 'isFatcaIndividualSelfCert') ? undefined : json['isFatcaIndividualSelfCert'],
        'tins': !exists(json, 'tins') ? undefined : (json['tins'] === null ? null : (json['tins'] as Array<any>).map(GetTinOutputFromJSON)),
    };
}

export function TinInfoOutputToJSON(value?: TinInfoOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isFatcaIndividualSelfCert': value.isFatcaIndividualSelfCert,
        'tins': value.tins === undefined ? undefined : (value.tins === null ? null : (value.tins as Array<any>).map(GetTinOutputToJSON)),
    };
}

