/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.270
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { VerifyRequestOutput } from './VerifyRequestOutput';
import {
    VerifyRequestOutputFromJSON,
    VerifyRequestOutputFromJSONTyped,
    VerifyRequestOutputToJSON,
} from './VerifyRequestOutput';

/**
 * Provides a generic paginated result with support for mapping between input and output types.
 * @export
 * @interface VerifyRequestVerifyRequestOutputPagination
 */
export interface VerifyRequestVerifyRequestOutputPagination {
    /**
     * Gets the paginated items of type <typeparamref name="TOutput" />.
     * @type {Array<VerifyRequestOutput>}
     * @memberof VerifyRequestVerifyRequestOutputPagination
     */
    items?: Array<VerifyRequestOutput> | null;
    /**
     * Gets the total number of items before pagination.
     * @type {number}
     * @memberof VerifyRequestVerifyRequestOutputPagination
     */
    totalItems?: number;
    /**
     * Gets the current page number.
     * @type {number}
     * @memberof VerifyRequestVerifyRequestOutputPagination
     */
    currentPage?: number;
    /**
     * Gets the number of items per page.
     * @type {number}
     * @memberof VerifyRequestVerifyRequestOutputPagination
     */
    pageSize?: number;
    /**
     * Gets the total number of pages.
     * @type {number}
     * @memberof VerifyRequestVerifyRequestOutputPagination
     */
    totalPages?: number;
    /**
     * Determines if there's a previous page.
     * @type {boolean}
     * @memberof VerifyRequestVerifyRequestOutputPagination
     */
    hasPreviousPage?: boolean;
    /**
     * Determines if there's a next page.
     * @type {boolean}
     * @memberof VerifyRequestVerifyRequestOutputPagination
     */
    hasNextPage?: boolean;
}

/**
 * Check if a given object implements the VerifyRequestVerifyRequestOutputPagination interface.
 */
export function instanceOfVerifyRequestVerifyRequestOutputPagination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VerifyRequestVerifyRequestOutputPaginationFromJSON(json: any): VerifyRequestVerifyRequestOutputPagination {
    return VerifyRequestVerifyRequestOutputPaginationFromJSONTyped(json, false);
}

export function VerifyRequestVerifyRequestOutputPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyRequestVerifyRequestOutputPagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(VerifyRequestOutputFromJSON)),
        'totalItems': !exists(json, 'totalItems') ? undefined : json['totalItems'],
        'currentPage': !exists(json, 'currentPage') ? undefined : json['currentPage'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'hasPreviousPage': !exists(json, 'hasPreviousPage') ? undefined : json['hasPreviousPage'],
        'hasNextPage': !exists(json, 'hasNextPage') ? undefined : json['hasNextPage'],
    };
}

export function VerifyRequestVerifyRequestOutputPaginationToJSON(value?: VerifyRequestVerifyRequestOutputPagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(VerifyRequestOutputToJSON)),
        'totalItems': value.totalItems,
        'currentPage': value.currentPage,
        'pageSize': value.pageSize,
        'totalPages': value.totalPages,
        'hasPreviousPage': value.hasPreviousPage,
        'hasNextPage': value.hasNextPage,
    };
}

