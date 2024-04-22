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
 * @interface CustomerValid
 */
export interface CustomerValid {
    /**
     * 
     * @type {string}
     * @memberof CustomerValid
     */
    isValid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerValid
     */
    description?: string | null;
}

/**
 * Check if a given object implements the CustomerValid interface.
 */
export function instanceOfCustomerValid(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerValidFromJSON(json: any): CustomerValid {
    return CustomerValidFromJSONTyped(json, false);
}

export function CustomerValidFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerValid {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isValid': !exists(json, 'isValid') ? undefined : json['isValid'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function CustomerValidToJSON(value?: CustomerValid | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isValid': value.isValid,
        'description': value.description,
    };
}
