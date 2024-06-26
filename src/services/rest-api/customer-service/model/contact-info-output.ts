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
import { AddressInfoOutput } from './address-info-output';
// May contain unused imports in some cases
// @ts-ignore
import { EmergencyContactInfoOutput } from './emergency-contact-info-output';

/**
 * 
 * @export
 * @interface ContactInfoOutput
 */
export interface ContactInfoOutput {
    /**
     * 
     * @type {string}
     * @memberof ContactInfoOutput
     */
    'docReceiveChannel'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoOutput
     */
    'docReceiveAddressType'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoOutput
     */
    'telephoneNo'?: string | null;
    /**
     * 
     * @type {Array<AddressInfoOutput>}
     * @memberof ContactInfoOutput
     */
    'addressInputs'?: Array<AddressInfoOutput> | null;
    /**
     * 
     * @type {Array<EmergencyContactInfoOutput>}
     * @memberof ContactInfoOutput
     */
    'emergencyContacts'?: Array<EmergencyContactInfoOutput> | null;
}

