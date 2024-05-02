/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.330
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressInfoModel } from './AddressInfoModel';
import {
    AddressInfoModelFromJSON,
    AddressInfoModelFromJSONTyped,
    AddressInfoModelToJSON,
} from './AddressInfoModel';
import type { OccupationInfoModel } from './OccupationInfoModel';
import {
    OccupationInfoModelFromJSON,
    OccupationInfoModelFromJSONTyped,
    OccupationInfoModelToJSON,
} from './OccupationInfoModel';
import type { PersonalInfoModel } from './PersonalInfoModel';
import {
    PersonalInfoModelFromJSON,
    PersonalInfoModelFromJSONTyped,
    PersonalInfoModelToJSON,
} from './PersonalInfoModel';
import type { PoliticRelationInfoModel } from './PoliticRelationInfoModel';
import {
    PoliticRelationInfoModelFromJSON,
    PoliticRelationInfoModelFromJSONTyped,
    PoliticRelationInfoModelToJSON,
} from './PoliticRelationInfoModel';
import type { SpouseInfoModel } from './SpouseInfoModel';
import {
    SpouseInfoModelFromJSON,
    SpouseInfoModelFromJSONTyped,
    SpouseInfoModelToJSON,
} from './SpouseInfoModel';

/**
 * 
 * @export
 * @interface PersonalInfoRequest
 */
export interface PersonalInfoRequest {
    /**
     * 
     * @type {PersonalInfoModel}
     * @memberof PersonalInfoRequest
     */
    personalInfo?: PersonalInfoModel | null;
    /**
     * 
     * @type {SpouseInfoModel}
     * @memberof PersonalInfoRequest
     */
    spouseInfo?: SpouseInfoModel | null;
    /**
     * 
     * @type {AddressInfoModel}
     * @memberof PersonalInfoRequest
     */
    addressInfoType1?: AddressInfoModel | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalInfoRequest
     */
    isAddressInfoType2SameType?: number;
    /**
     * 
     * @type {AddressInfoModel}
     * @memberof PersonalInfoRequest
     */
    addressInfoType2?: AddressInfoModel | null;
    /**
     * 
     * @type {OccupationInfoModel}
     * @memberof PersonalInfoRequest
     */
    occupationInfo?: OccupationInfoModel | null;
    /**
     * 
     * @type {number}
     * @memberof PersonalInfoRequest
     */
    isAddressInfoType3SameType?: number;
    /**
     * 
     * @type {AddressInfoModel}
     * @memberof PersonalInfoRequest
     */
    addressInfoType3?: AddressInfoModel | null;
    /**
     * 
     * @type {PoliticRelationInfoModel}
     * @memberof PersonalInfoRequest
     */
    politicRelationInfo?: PoliticRelationInfoModel | null;
}

/**
 * Check if a given object implements the PersonalInfoRequest interface.
 */
export function instanceOfPersonalInfoRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonalInfoRequestFromJSON(json: any): PersonalInfoRequest {
    return PersonalInfoRequestFromJSONTyped(json, false);
}

export function PersonalInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalInfoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'personalInfo': !exists(json, 'personalInfo') ? undefined : PersonalInfoModelFromJSON(json['personalInfo']),
        'spouseInfo': !exists(json, 'spouseInfo') ? undefined : SpouseInfoModelFromJSON(json['spouseInfo']),
        'addressInfoType1': !exists(json, 'addressInfoType1') ? undefined : AddressInfoModelFromJSON(json['addressInfoType1']),
        'isAddressInfoType2SameType': !exists(json, 'isAddressInfoType2SameType') ? undefined : json['isAddressInfoType2SameType'],
        'addressInfoType2': !exists(json, 'addressInfoType2') ? undefined : AddressInfoModelFromJSON(json['addressInfoType2']),
        'occupationInfo': !exists(json, 'occupationInfo') ? undefined : OccupationInfoModelFromJSON(json['occupationInfo']),
        'isAddressInfoType3SameType': !exists(json, 'isAddressInfoType3SameType') ? undefined : json['isAddressInfoType3SameType'],
        'addressInfoType3': !exists(json, 'addressInfoType3') ? undefined : AddressInfoModelFromJSON(json['addressInfoType3']),
        'politicRelationInfo': !exists(json, 'politicRelationInfo') ? undefined : PoliticRelationInfoModelFromJSON(json['politicRelationInfo']),
    };
}

export function PersonalInfoRequestToJSON(value?: PersonalInfoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'personalInfo': PersonalInfoModelToJSON(value.personalInfo),
        'spouseInfo': SpouseInfoModelToJSON(value.spouseInfo),
        'addressInfoType1': AddressInfoModelToJSON(value.addressInfoType1),
        'isAddressInfoType2SameType': value.isAddressInfoType2SameType,
        'addressInfoType2': AddressInfoModelToJSON(value.addressInfoType2),
        'occupationInfo': OccupationInfoModelToJSON(value.occupationInfo),
        'isAddressInfoType3SameType': value.isAddressInfoType3SameType,
        'addressInfoType3': AddressInfoModelToJSON(value.addressInfoType3),
        'politicRelationInfo': PoliticRelationInfoModelToJSON(value.politicRelationInfo),
    };
}

