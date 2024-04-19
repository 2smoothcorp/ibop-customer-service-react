/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.268
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
 * @interface ComboBox
 */
export interface ComboBox {
    /**
     * 
     * @type {string}
     * @memberof ComboBox
     */
    rValue?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ComboBox
     */
    rText?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ComboBox
     */
    rSort?: string | null;
}

/**
 * Check if a given object implements the ComboBox interface.
 */
export function instanceOfComboBox(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ComboBoxFromJSON(json: any): ComboBox {
    return ComboBoxFromJSONTyped(json, false);
}

export function ComboBoxFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComboBox {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rValue': !exists(json, 'rValue') ? undefined : json['rValue'],
        'rText': !exists(json, 'rText') ? undefined : json['rText'],
        'rSort': !exists(json, 'rSort') ? undefined : json['rSort'],
    };
}

export function ComboBoxToJSON(value?: ComboBox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rValue': value.rValue,
        'rText': value.rText,
        'rSort': value.rSort,
    };
}

