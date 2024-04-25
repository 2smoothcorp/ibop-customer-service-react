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
import type { HistoriesOutput } from './HistoriesOutput';
import {
    HistoriesOutputFromJSON,
    HistoriesOutputFromJSONTyped,
    HistoriesOutputToJSON,
} from './HistoriesOutput';

/**
 * 
 * @export
 * @interface AccountActionLogHistoriesOutputPagination
 */
export interface AccountActionLogHistoriesOutputPagination {
    /**
     * 
     * @type {Array<HistoriesOutput>}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    items?: Array<HistoriesOutput> | null;
    /**
     * 
     * @type {number}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    currentPage?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    readonly hasPreviousPage?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    readonly hasNextPage?: boolean;
}

/**
 * Check if a given object implements the AccountActionLogHistoriesOutputPagination interface.
 */
export function instanceOfAccountActionLogHistoriesOutputPagination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountActionLogHistoriesOutputPaginationFromJSON(json: any): AccountActionLogHistoriesOutputPagination {
    return AccountActionLogHistoriesOutputPaginationFromJSONTyped(json, false);
}

export function AccountActionLogHistoriesOutputPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountActionLogHistoriesOutputPagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(HistoriesOutputFromJSON)),
        'totalItems': !exists(json, 'totalItems') ? undefined : json['totalItems'],
        'currentPage': !exists(json, 'currentPage') ? undefined : json['currentPage'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'hasPreviousPage': !exists(json, 'hasPreviousPage') ? undefined : json['hasPreviousPage'],
        'hasNextPage': !exists(json, 'hasNextPage') ? undefined : json['hasNextPage'],
    };
}

export function AccountActionLogHistoriesOutputPaginationToJSON(value?: AccountActionLogHistoriesOutputPagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(HistoriesOutputToJSON)),
        'totalItems': value.totalItems,
        'currentPage': value.currentPage,
        'pageSize': value.pageSize,
        'totalPages': value.totalPages,
    };
}

