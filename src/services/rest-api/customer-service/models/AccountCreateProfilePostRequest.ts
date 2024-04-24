/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.294
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressRequest } from './AddressRequest';
import {
    AddressRequestFromJSON,
    AddressRequestFromJSONTyped,
    AddressRequestToJSON,
} from './AddressRequest';
import type { AttorneyRequest } from './AttorneyRequest';
import {
    AttorneyRequestFromJSON,
    AttorneyRequestFromJSONTyped,
    AttorneyRequestToJSON,
} from './AttorneyRequest';
import type { BankRequest } from './BankRequest';
import {
    BankRequestFromJSON,
    BankRequestFromJSONTyped,
    BankRequestToJSON,
} from './BankRequest';
import type { CustomerProfileRequest } from './CustomerProfileRequest';
import {
    CustomerProfileRequestFromJSON,
    CustomerProfileRequestFromJSONTyped,
    CustomerProfileRequestToJSON,
} from './CustomerProfileRequest';
import type { EmergencyContactRequest } from './EmergencyContactRequest';
import {
    EmergencyContactRequestFromJSON,
    EmergencyContactRequestFromJSONTyped,
    EmergencyContactRequestToJSON,
} from './EmergencyContactRequest';
import type { ForeignTaxRequest } from './ForeignTaxRequest';
import {
    ForeignTaxRequestFromJSON,
    ForeignTaxRequestFromJSONTyped,
    ForeignTaxRequestToJSON,
} from './ForeignTaxRequest';
import type { SelectProductRequest } from './SelectProductRequest';
import {
    SelectProductRequestFromJSON,
    SelectProductRequestFromJSONTyped,
    SelectProductRequestToJSON,
} from './SelectProductRequest';

/**
 * 
 * @export
 * @interface AccountCreateProfilePostRequest
 */
export interface AccountCreateProfilePostRequest {
    /**
     * 
     * @type {CustomerProfileRequest}
     * @memberof AccountCreateProfilePostRequest
     */
    customerProfile?: CustomerProfileRequest | null;
    /**
     * 
     * @type {Array<AddressRequest>}
     * @memberof AccountCreateProfilePostRequest
     */
    address?: Array<AddressRequest> | null;
    /**
     * 
     * @type {Array<EmergencyContactRequest>}
     * @memberof AccountCreateProfilePostRequest
     */
    emergencyContact?: Array<EmergencyContactRequest> | null;
    /**
     * 
     * @type {Array<BankRequest>}
     * @memberof AccountCreateProfilePostRequest
     */
    bank?: Array<BankRequest> | null;
    /**
     * 
     * @type {AttorneyRequest}
     * @memberof AccountCreateProfilePostRequest
     */
    attorney?: AttorneyRequest | null;
    /**
     * 
     * @type {ForeignTaxRequest}
     * @memberof AccountCreateProfilePostRequest
     */
    foreignTax?: ForeignTaxRequest | null;
    /**
     * 
     * @type {Array<SelectProductRequest>}
     * @memberof AccountCreateProfilePostRequest
     */
    selectProduct?: Array<SelectProductRequest> | null;
}

/**
 * Check if a given object implements the AccountCreateProfilePostRequest interface.
 */
export function instanceOfAccountCreateProfilePostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountCreateProfilePostRequestFromJSON(json: any): AccountCreateProfilePostRequest {
    return AccountCreateProfilePostRequestFromJSONTyped(json, false);
}

export function AccountCreateProfilePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountCreateProfilePostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerProfile': !exists(json, 'customerProfile') ? undefined : CustomerProfileRequestFromJSON(json['customerProfile']),
        'address': !exists(json, 'address') ? undefined : (json['address'] === null ? null : (json['address'] as Array<any>).map(AddressRequestFromJSON)),
        'emergencyContact': !exists(json, 'emergencyContact') ? undefined : (json['emergencyContact'] === null ? null : (json['emergencyContact'] as Array<any>).map(EmergencyContactRequestFromJSON)),
        'bank': !exists(json, 'bank') ? undefined : (json['bank'] === null ? null : (json['bank'] as Array<any>).map(BankRequestFromJSON)),
        'attorney': !exists(json, 'attorney') ? undefined : AttorneyRequestFromJSON(json['attorney']),
        'foreignTax': !exists(json, 'foreignTax') ? undefined : ForeignTaxRequestFromJSON(json['foreignTax']),
        'selectProduct': !exists(json, 'selectProduct') ? undefined : (json['selectProduct'] === null ? null : (json['selectProduct'] as Array<any>).map(SelectProductRequestFromJSON)),
    };
}

export function AccountCreateProfilePostRequestToJSON(value?: AccountCreateProfilePostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customerProfile': CustomerProfileRequestToJSON(value.customerProfile),
        'address': value.address === undefined ? undefined : (value.address === null ? null : (value.address as Array<any>).map(AddressRequestToJSON)),
        'emergencyContact': value.emergencyContact === undefined ? undefined : (value.emergencyContact === null ? null : (value.emergencyContact as Array<any>).map(EmergencyContactRequestToJSON)),
        'bank': value.bank === undefined ? undefined : (value.bank === null ? null : (value.bank as Array<any>).map(BankRequestToJSON)),
        'attorney': AttorneyRequestToJSON(value.attorney),
        'foreignTax': ForeignTaxRequestToJSON(value.foreignTax),
        'selectProduct': value.selectProduct === undefined ? undefined : (value.selectProduct === null ? null : (value.selectProduct as Array<any>).map(SelectProductRequestToJSON)),
    };
}

