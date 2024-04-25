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
import type { MasterATSBankOutput } from './MasterATSBankOutput';
import {
    MasterATSBankOutputFromJSON,
    MasterATSBankOutputFromJSONTyped,
    MasterATSBankOutputToJSON,
} from './MasterATSBankOutput';

/**
 * 
 * @export
 * @interface GetMasterATSBankComboOutput
 */
export interface GetMasterATSBankComboOutput {
    /**
     * 
     * @type {number}
     * @memberof GetMasterATSBankComboOutput
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof GetMasterATSBankComboOutput
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof GetMasterATSBankComboOutput
     */
    message?: string | null;
    /**
     * 
     * @type {Array<MasterATSBankOutput>}
     * @memberof GetMasterATSBankComboOutput
     */
    data?: Array<MasterATSBankOutput> | null;
}

/**
 * Check if a given object implements the GetMasterATSBankComboOutput interface.
 */
export function instanceOfGetMasterATSBankComboOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetMasterATSBankComboOutputFromJSON(json: any): GetMasterATSBankComboOutput {
    return GetMasterATSBankComboOutputFromJSONTyped(json, false);
}

export function GetMasterATSBankComboOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMasterATSBankComboOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(MasterATSBankOutputFromJSON)),
    };
}

export function GetMasterATSBankComboOutputToJSON(value?: GetMasterATSBankComboOutput | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(MasterATSBankOutputToJSON)),
    };
}

