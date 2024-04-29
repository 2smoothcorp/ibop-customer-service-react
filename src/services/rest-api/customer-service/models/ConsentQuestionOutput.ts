/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.320
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConsentDetailOutput } from './ConsentDetailOutput';
import {
    ConsentDetailOutputFromJSON,
    ConsentDetailOutputFromJSONTyped,
    ConsentDetailOutputToJSON,
} from './ConsentDetailOutput';

/**
 * 
 * @export
 * @interface ConsentQuestionOutput
 */
export interface ConsentQuestionOutput {
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    header?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    header2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    header3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    header4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    header5?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    footer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    footer2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    footer3?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ConsentQuestionOutput
     */
    version?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    isUse?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutput
     */
    remark?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ConsentQuestionOutput
     */
    createDate?: Date | null;
    /**
     * 
     * @type {Array<ConsentDetailOutput>}
     * @memberof ConsentQuestionOutput
     */
    consentDetail?: Array<ConsentDetailOutput> | null;
}

/**
 * Check if a given object implements the ConsentQuestionOutput interface.
 */
export function instanceOfConsentQuestionOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConsentQuestionOutputFromJSON(json: any): ConsentQuestionOutput {
    return ConsentQuestionOutputFromJSONTyped(json, false);
}

export function ConsentQuestionOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsentQuestionOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'header': !exists(json, 'header') ? undefined : json['header'],
        'header2': !exists(json, 'header2') ? undefined : json['header2'],
        'header3': !exists(json, 'header3') ? undefined : json['header3'],
        'header4': !exists(json, 'header4') ? undefined : json['header4'],
        'header5': !exists(json, 'header5') ? undefined : json['header5'],
        'footer': !exists(json, 'footer') ? undefined : json['footer'],
        'footer2': !exists(json, 'footer2') ? undefined : json['footer2'],
        'footer3': !exists(json, 'footer3') ? undefined : json['footer3'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'isUse': !exists(json, 'isUse') ? undefined : json['isUse'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'createDate': !exists(json, 'createDate') ? undefined : (json['createDate'] === null ? null : new Date(json['createDate'])),
        'consentDetail': !exists(json, 'consentDetail') ? undefined : (json['consentDetail'] === null ? null : (json['consentDetail'] as Array<any>).map(ConsentDetailOutputFromJSON)),
    };
}

export function ConsentQuestionOutputToJSON(value?: ConsentQuestionOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'title': value.title,
        'header': value.header,
        'header2': value.header2,
        'header3': value.header3,
        'header4': value.header4,
        'header5': value.header5,
        'footer': value.footer,
        'footer2': value.footer2,
        'footer3': value.footer3,
        'version': value.version,
        'isUse': value.isUse,
        'remark': value.remark,
        'createDate': value.createDate === undefined ? undefined : (value.createDate === null ? null : value.createDate.toISOString()),
        'consentDetail': value.consentDetail === undefined ? undefined : (value.consentDetail === null ? null : (value.consentDetail as Array<any>).map(ConsentDetailOutputToJSON)),
    };
}

