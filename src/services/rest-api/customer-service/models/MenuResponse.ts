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
/**
 * 
 * @export
 * @interface MenuResponse
 */
export interface MenuResponse {
    /**
     * 
     * @type {string}
     * @memberof MenuResponse
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MenuResponse
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MenuResponse
     */
    sequence?: number;
}

/**
 * Check if a given object implements the MenuResponse interface.
 */
export function instanceOfMenuResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MenuResponseFromJSON(json: any): MenuResponse {
    return MenuResponseFromJSONTyped(json, false);
}

export function MenuResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MenuResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
    };
}

export function MenuResponseToJSON(value?: MenuResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'sequence': value.sequence,
    };
}

