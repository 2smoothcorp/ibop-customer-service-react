/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.318
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HistoriesOutput
 */
export interface HistoriesOutput {
    /**
     * 
     * @type {string}
     * @memberof HistoriesOutput
     */
    action?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HistoriesOutput
     */
    actionBy?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HistoriesOutput
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HistoriesOutput
     */
    remark?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof HistoriesOutput
     */
    actionTimestamp?: Date | null;
}

/**
 * Check if a given object implements the HistoriesOutput interface.
 */
export function instanceOfHistoriesOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HistoriesOutputFromJSON(json: any): HistoriesOutput {
    return HistoriesOutputFromJSONTyped(json, false);
}

export function HistoriesOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoriesOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'actionBy': !exists(json, 'actionBy') ? undefined : json['actionBy'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'actionTimestamp': !exists(json, 'actionTimestamp') ? undefined : (json['actionTimestamp'] === null ? null : new Date(json['actionTimestamp'])),
    };
}

export function HistoriesOutputToJSON(value?: HistoriesOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'actionBy': value.actionBy,
        'status': value.status,
        'remark': value.remark,
        'actionTimestamp': value.actionTimestamp === undefined ? undefined : (value.actionTimestamp === null ? null : value.actionTimestamp.toISOString()),
    };
}

