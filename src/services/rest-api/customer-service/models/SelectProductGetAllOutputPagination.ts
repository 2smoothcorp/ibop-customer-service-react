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
import type { GetAllOutput } from './GetAllOutput';
import {
    GetAllOutputFromJSON,
    GetAllOutputFromJSONTyped,
    GetAllOutputToJSON,
} from './GetAllOutput';

/**
 * 
 * @export
 * @interface SelectProductGetAllOutputPagination
 */
export interface SelectProductGetAllOutputPagination {
    /**
     * 
     * @type {Array<GetAllOutput>}
     * @memberof SelectProductGetAllOutputPagination
     */
    items?: Array<GetAllOutput> | null;
    /**
     * 
     * @type {number}
     * @memberof SelectProductGetAllOutputPagination
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof SelectProductGetAllOutputPagination
     */
    currentPage?: number;
    /**
     * 
     * @type {number}
     * @memberof SelectProductGetAllOutputPagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof SelectProductGetAllOutputPagination
     */
    totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SelectProductGetAllOutputPagination
     */
    readonly hasPreviousPage?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SelectProductGetAllOutputPagination
     */
    readonly hasNextPage?: boolean;
}

/**
 * Check if a given object implements the SelectProductGetAllOutputPagination interface.
 */
export function instanceOfSelectProductGetAllOutputPagination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SelectProductGetAllOutputPaginationFromJSON(json: any): SelectProductGetAllOutputPagination {
    return SelectProductGetAllOutputPaginationFromJSONTyped(json, false);
}

export function SelectProductGetAllOutputPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectProductGetAllOutputPagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(GetAllOutputFromJSON)),
        'totalItems': !exists(json, 'totalItems') ? undefined : json['totalItems'],
        'currentPage': !exists(json, 'currentPage') ? undefined : json['currentPage'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'hasPreviousPage': !exists(json, 'hasPreviousPage') ? undefined : json['hasPreviousPage'],
        'hasNextPage': !exists(json, 'hasNextPage') ? undefined : json['hasNextPage'],
    };
}

export function SelectProductGetAllOutputPaginationToJSON(value?: SelectProductGetAllOutputPagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(GetAllOutputToJSON)),
        'totalItems': value.totalItems,
        'currentPage': value.currentPage,
        'pageSize': value.pageSize,
        'totalPages': value.totalPages,
    };
}

