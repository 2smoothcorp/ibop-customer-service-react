/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.242
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { AddressRequest } from './address-request';
// May contain unused imports in some cases
// @ts-ignore
import { AttorneyRequest } from './attorney-request';
// May contain unused imports in some cases
// @ts-ignore
import { BankRequest } from './bank-request';
// May contain unused imports in some cases
// @ts-ignore
import { CustomerProfileRequest } from './customer-profile-request';
// May contain unused imports in some cases
// @ts-ignore
import { EmergencyContactRequest } from './emergency-contact-request';
// May contain unused imports in some cases
// @ts-ignore
import { ForeignTaxRequest } from './foreign-tax-request';
// May contain unused imports in some cases
// @ts-ignore
import { SelectProductRequest } from './select-product-request';

/**
 * 
 * @export
 * @interface RequestCustomerInput
 */
export interface RequestCustomerInput {
    /**
     * 
     * @type {CustomerProfileRequest}
     * @memberof RequestCustomerInput
     */
    'customerProfile'?: CustomerProfileRequest | null;
    /**
     * 
     * @type {Array<AddressRequest>}
     * @memberof RequestCustomerInput
     */
    'address'?: Array<AddressRequest> | null;
    /**
     * 
     * @type {Array<EmergencyContactRequest>}
     * @memberof RequestCustomerInput
     */
    'emergencyContact'?: Array<EmergencyContactRequest> | null;
    /**
     * 
     * @type {Array<BankRequest>}
     * @memberof RequestCustomerInput
     */
    'bank'?: Array<BankRequest> | null;
    /**
     * 
     * @type {AttorneyRequest}
     * @memberof RequestCustomerInput
     */
    'attorney'?: AttorneyRequest | null;
    /**
     * 
     * @type {ForeignTaxRequest}
     * @memberof RequestCustomerInput
     */
    'foreignTax'?: ForeignTaxRequest | null;
    /**
     * 
     * @type {Array<SelectProductRequest>}
     * @memberof RequestCustomerInput
     */
    'selectProduct'?: Array<SelectProductRequest> | null;
}

