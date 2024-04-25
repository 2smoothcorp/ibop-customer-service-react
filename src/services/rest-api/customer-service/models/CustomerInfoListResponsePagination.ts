/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.299
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomerInfoListResponse } from './CustomerInfoListResponse';
import {
    CustomerInfoListResponseFromJSON,
    CustomerInfoListResponseFromJSONTyped,
    CustomerInfoListResponseToJSON,
} from './CustomerInfoListResponse';

/**
 * 
 * @export
 * @interface CustomerInfoListResponsePagination
 */
export interface CustomerInfoListResponsePagination {
    /**
     * 
     * @type {Array<CustomerInfoListResponse>}
     * @memberof CustomerInfoListResponsePagination
     */
    items?: Array<CustomerInfoListResponse> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerInfoListResponsePagination
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerInfoListResponsePagination
     */
    currentPage?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerInfoListResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerInfoListResponsePagination
     */
    totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerInfoListResponsePagination
     */
    readonly hasPreviousPage?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerInfoListResponsePagination
     */
    readonly hasNextPage?: boolean;
}

/**
 * Check if a given object implements the CustomerInfoListResponsePagination interface.
 */
export function instanceOfCustomerInfoListResponsePagination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerInfoListResponsePaginationFromJSON(json: any): CustomerInfoListResponsePagination {
    return CustomerInfoListResponsePaginationFromJSONTyped(json, false);
}

export function CustomerInfoListResponsePaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerInfoListResponsePagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(CustomerInfoListResponseFromJSON)),
        'totalItems': !exists(json, 'totalItems') ? undefined : json['totalItems'],
        'currentPage': !exists(json, 'currentPage') ? undefined : json['currentPage'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'hasPreviousPage': !exists(json, 'hasPreviousPage') ? undefined : json['hasPreviousPage'],
        'hasNextPage': !exists(json, 'hasNextPage') ? undefined : json['hasNextPage'],
    };
}

export function CustomerInfoListResponsePaginationToJSON(value?: CustomerInfoListResponsePagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(CustomerInfoListResponseToJSON)),
        'totalItems': value.totalItems,
        'currentPage': value.currentPage,
        'pageSize': value.pageSize,
        'totalPages': value.totalPages,
    };
}

