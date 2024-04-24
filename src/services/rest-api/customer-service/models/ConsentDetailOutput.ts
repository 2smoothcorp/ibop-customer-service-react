/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.286
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
 * @interface ConsentDetailOutput
 */
export interface ConsentDetailOutput {
    /**
     * 
     * @type {string}
     * @memberof ConsentDetailOutput
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentDetailOutput
     */
    formId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentDetailOutput
     */
    titleName?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ConsentDetailOutput
     */
    sortOrder?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentDetailOutput
     */
    contentHtml?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentDetailOutput
     */
    contentText?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentDetailOutput
     */
    remark?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ConsentDetailOutput
     */
    createDate?: Date | null;
}

/**
 * Check if a given object implements the ConsentDetailOutput interface.
 */
export function instanceOfConsentDetailOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConsentDetailOutputFromJSON(json: any): ConsentDetailOutput {
    return ConsentDetailOutputFromJSONTyped(json, false);
}

export function ConsentDetailOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsentDetailOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'formId': !exists(json, 'formId') ? undefined : json['formId'],
        'titleName': !exists(json, 'titleName') ? undefined : json['titleName'],
        'sortOrder': !exists(json, 'sortOrder') ? undefined : json['sortOrder'],
        'contentHtml': !exists(json, 'contentHtml') ? undefined : json['contentHtml'],
        'contentText': !exists(json, 'contentText') ? undefined : json['contentText'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'createDate': !exists(json, 'createDate') ? undefined : (json['createDate'] === null ? null : new Date(json['createDate'])),
    };
}

export function ConsentDetailOutputToJSON(value?: ConsentDetailOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'formId': value.formId,
        'titleName': value.titleName,
        'sortOrder': value.sortOrder,
        'contentHtml': value.contentHtml,
        'contentText': value.contentText,
        'remark': value.remark,
        'createDate': value.createDate === undefined ? undefined : (value.createDate === null ? null : value.createDate.toISOString()),
    };
}

