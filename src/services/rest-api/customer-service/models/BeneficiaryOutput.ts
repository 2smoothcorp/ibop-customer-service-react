/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.364
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressInfoOutput } from './AddressInfoOutput';
import {
    AddressInfoOutputFromJSON,
    AddressInfoOutputFromJSONTyped,
    AddressInfoOutputToJSON,
} from './AddressInfoOutput';

/**
 * 
 * @export
 * @interface BeneficiaryOutput
 */
export interface BeneficiaryOutput {
    /**
     * 
     * @type {boolean}
     * @memberof BeneficiaryOutput
     */
    isOwner?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutput
     */
    beneficiaryFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutput
     */
    beneficiaryLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutput
     */
    beneficiaryRelationshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutput
     */
    beneficiaryRelationshipDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutput
     */
    beneficiaryRelationshipOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutput
     */
    beneficiaryType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutput
     */
    beneficiaryTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutput
     */
    beneficiaryNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof BeneficiaryOutput
     */
    beneficiaryExpireDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof BeneficiaryOutput
     */
    beneficiaryNeverExpire?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryOutput
     */
    modifiedBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof BeneficiaryOutput
     */
    modifiedDateTime?: Date | null;
    /**
     * 
     * @type {AddressInfoOutput}
     * @memberof BeneficiaryOutput
     */
    customerAddresses?: AddressInfoOutput | null;
}

/**
 * Check if a given object implements the BeneficiaryOutput interface.
 */
export function instanceOfBeneficiaryOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BeneficiaryOutputFromJSON(json: any): BeneficiaryOutput {
    return BeneficiaryOutputFromJSONTyped(json, false);
}

export function BeneficiaryOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeneficiaryOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isOwner': !exists(json, 'isOwner') ? undefined : json['isOwner'],
        'beneficiaryFirstName': !exists(json, 'beneficiaryFirstName') ? undefined : json['beneficiaryFirstName'],
        'beneficiaryLastName': !exists(json, 'beneficiaryLastName') ? undefined : json['beneficiaryLastName'],
        'beneficiaryRelationshipCode': !exists(json, 'beneficiaryRelationshipCode') ? undefined : json['beneficiaryRelationshipCode'],
        'beneficiaryRelationshipDesc': !exists(json, 'beneficiaryRelationshipDesc') ? undefined : json['beneficiaryRelationshipDesc'],
        'beneficiaryRelationshipOther': !exists(json, 'beneficiaryRelationshipOther') ? undefined : json['beneficiaryRelationshipOther'],
        'beneficiaryType': !exists(json, 'beneficiaryType') ? undefined : json['beneficiaryType'],
        'beneficiaryTypeDesc': !exists(json, 'beneficiaryTypeDesc') ? undefined : json['beneficiaryTypeDesc'],
        'beneficiaryNo': !exists(json, 'beneficiaryNo') ? undefined : json['beneficiaryNo'],
        'beneficiaryExpireDate': !exists(json, 'beneficiaryExpireDate') ? undefined : (json['beneficiaryExpireDate'] === null ? null : new Date(json['beneficiaryExpireDate'])),
        'beneficiaryNeverExpire': !exists(json, 'beneficiaryNeverExpire') ? undefined : json['beneficiaryNeverExpire'],
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : json['modifiedBy'],
        'modifiedDateTime': !exists(json, 'modifiedDateTime') ? undefined : (json['modifiedDateTime'] === null ? null : new Date(json['modifiedDateTime'])),
        'customerAddresses': !exists(json, 'customerAddresses') ? undefined : AddressInfoOutputFromJSON(json['customerAddresses']),
    };
}

export function BeneficiaryOutputToJSON(value?: BeneficiaryOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isOwner': value.isOwner,
        'beneficiaryFirstName': value.beneficiaryFirstName,
        'beneficiaryLastName': value.beneficiaryLastName,
        'beneficiaryRelationshipCode': value.beneficiaryRelationshipCode,
        'beneficiaryRelationshipDesc': value.beneficiaryRelationshipDesc,
        'beneficiaryRelationshipOther': value.beneficiaryRelationshipOther,
        'beneficiaryType': value.beneficiaryType,
        'beneficiaryTypeDesc': value.beneficiaryTypeDesc,
        'beneficiaryNo': value.beneficiaryNo,
        'beneficiaryExpireDate': value.beneficiaryExpireDate === undefined ? undefined : (value.beneficiaryExpireDate === null ? null : value.beneficiaryExpireDate.toISOString()),
        'beneficiaryNeverExpire': value.beneficiaryNeverExpire,
        'modifiedBy': value.modifiedBy,
        'modifiedDateTime': value.modifiedDateTime === undefined ? undefined : (value.modifiedDateTime === null ? null : value.modifiedDateTime.toISOString()),
        'customerAddresses': AddressInfoOutputToJSON(value.customerAddresses),
    };
}

