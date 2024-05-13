"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import PersonTypeDDL from "@/components/dropdownlist/person-type-ddl";
import ReferenceTypeDDL from "@/components/dropdownlist/reference-type-ddl";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataNationCustom } from "@/hooks/master-data-nation";
import { useMasterDataPersonTypeCustom } from "@/hooks/master-data-person-type";
import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { PersonalInfoModel } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import dayjs from "dayjs";
import React, { ReactElement } from "react";

interface DetailSection {
    name?: keyof PersonalInfoModel
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
    CustomComponent?: ReactElement
}

const fieldList = ({ data }: { data: PersonalInfoModel }): Array<DetailSection> => {

    let isEditable = false;

    return (
        [
            {
                label: 'ประเภทลูกค้า',
                name: 'personTypeCode',
                CustomComponent: <PersonTypeDDL
                    isEditable={isEditable}
                    name="personTypeCode"
                    defaultValue={data.personTypeCode || ''}
                //setValue={(value) => form.setValue(`personTypeCode` as any, value)}
                //defaultValue={form.watch(`personTypeCode` as any)}
                />
            },
            {
                label: 'ประเภทหลักฐานลูกค้า',
                name: 'referenceType',
                CustomComponent: <ReferenceTypeDDL
                    isEditable={isEditable}
                    name="referenceType"
                    defaultValue={data.referenceType || ''}
                //setValue={(value) => form.setValue(`personTypeCode` as any, value)}
                //defaultValue={form.watch(`personTypeCode` as any)}
                />
            },
            {
                label: 'เลขที่บัตร',
                name: 'referenceID',
            },
            {
                label: 'ประเทศที่ออกบัตร',
                name: 'countryCode'
            },
            {
                label: 'ประเทศเจ้าของสัญชาติ',
                name: 'nationalityCode'
            },
            {
                label: 'วันที่หมดอายุบัตร (ค.ศ.)',
                name: 'identityExpireDate' //identityNeverExpire
            },
            {
                label: 'คำนำหน้า',
                name: 'titleCode'
            },
            {
                label: 'ชื่อ (ภาษาไทย)',
                name: 'firstNameTh'
            },
            {
                label: 'นามสกุล (ภาษาไทย)',
                name: 'lastNameTh'
            },
            {
                label: '',
            },
            {
                label: 'ชื่อ (ภาษาอังกฤษ)',
                name: 'firstNameEn'
            },
            {
                label: 'นามสกุล (ภาษาอังกฤษ)',
                name: 'lastNameEn'
            },
            {
                label: 'เพศ',
                name: 'genderCode'
            },
            {
                label: 'วัน/เดือน/ปีเกิด (ค.ศ.)',
                name: 'birthDate'
            }

        ]
    )
}

const getValueFromFieldName = (attributeName: string, data: PersonalInfoModel | undefined | null, normalize?: string): string | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as PersonalInfoModel, value) : value
}

const normalizationData = (name: string, personalInfo: PersonalInfoModel, defaultValue: string | boolean): string => {
    switch (name) {
        case 'personTypeCode':
            return handleEmptyStringFormApi(personalInfo.personTypeCode);
        case 'personType':
            return !isEmptyStringFormApi(personalInfo.personTypeCode) ? `${personalInfo.personTypeCode} - ${personalInfo.personTypeDesc}` : '-';
        case 'referenceType':
            return handleEmptyStringFormApi(personalInfo.referenceType);
        case 'referenceTypeDesc':
            return !isEmptyStringFormApi(personalInfo.referenceType) ? `${personalInfo.referenceType} - ${personalInfo.referenceTypeDesc} ` : '-';
        case 'referenceID':
            return handleEmptyStringFormApi(personalInfo.referenceID);
        case 'countryCode':
            return handleEmptyStringFormApi(personalInfo.countryCode);
        case 'country':
            return !isEmptyStringFormApi(personalInfo.countryCode) ? `${personalInfo.countryCode} - ${personalInfo.countryNameTh || personalInfo.countryNameEn}` : '-';
        case 'nationalityCode':
            return handleEmptyStringFormApi(personalInfo.nationalityCode);
        case 'nation':
            return !isEmptyStringFormApi(personalInfo.nationalityCode) ? `${personalInfo.nationalityCode} - ${personalInfo.nationDesc}` : '-';
        case 'identityNeverExpire':
            if (personalInfo.identityNeverExpire) {
                return 'ตลอดชีพ';
            }
            return handleEmptyStringFormApi(personalInfo.identityExpireDate);
        case 'identityExpireDate':
            return !isEmptyStringFormApi(personalInfo.identityExpireDate) ? dayjs(personalInfo.identityExpireDate).format('DD/MM/YYYY') : '-';
        case 'genderCode':
            return handleEmptyStringFormApi(personalInfo.genderCode);
        case 'gender':
            return !isEmptyStringFormApi(personalInfo.genderCode) ? `${personalInfo.genderCode} - ${personalInfo.gender}` : '-';
        case 'titleCode':
            return handleEmptyStringFormApi(personalInfo.titleCode);
        case 'title':
            return !isEmptyStringFormApi(personalInfo.titleCode) ? `${personalInfo.titleCode} - ${personalInfo.titleNameTh || personalInfo.titleNameEn}` : '-';
        case 'firstNameTh':
            return handleEmptyStringFormApi(personalInfo.firstNameTh);
        case 'lastNameTh':
            return handleEmptyStringFormApi(personalInfo.lastNameTh);
        case 'firstNameEn':
            return handleEmptyStringFormApi(personalInfo.firstNameEn);
        case 'lastNameEn':
            return handleEmptyStringFormApi(personalInfo.lastNameEn);
        case 'birthDate':
            return !isEmptyStringFormApi(personalInfo.birthDate) ? dayjs(personalInfo.birthDate).format('YYYY-MM-DD') : '-';
        default:
            return '-';
    }
}

export default function SummaryPersonalInfo({ data }: { data: CustomerInformationState }) {

    const isEditable = false;

    // master data
    const { data: personType, isLoading: isLoadingPersonType } = useMasterDataPersonTypeCustom();
    const { data: reference, isLoading: isLoadingReference } = useMasterDataReferenceCustom();
    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();
    const { data: titles, isLoading: isLoadingTitles } = useMasterDataTitlesCustom();
    const { data: nation, isLoading: isLoadingNation } = useMasterDataNationCustom();

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ข้อมูลส่วนตัว"
            />
            <ContentLoading
                isLoading={false}
                error={undefined}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        fieldList({ data: data.personalInfo }).map((detail: DetailSection, idx: number) => {
                            const { name, label, defaultValue, isRequired, normalize, CustomComponent } = detail
                            if (!name) return <div key={`field-item-${idx}`}></div>
                            const _textShow = (getValueFromFieldName(name, data.personalInfo, normalize) || '').toString();
                            //if (CustomComponent) return CustomComponent
                            return <React.Fragment key={`field-item-${idx}`}>
                                <InputHorizontal
                                    label={label || ''}
                                    defaultValue={defaultValue}
                                    isEditable={isEditable}
                                    textShow={_textShow}
                                    name={name}
                                    isRequired={isRequired}
                                />
                            </React.Fragment>
                        })
                    }
                </div>
            </ContentLoading>
        </>
    )
}