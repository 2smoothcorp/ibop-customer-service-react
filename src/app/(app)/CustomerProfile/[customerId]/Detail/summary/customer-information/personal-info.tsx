"use client"

import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataNationCustom } from "@/hooks/master-data-nation";
import { useMasterDataPersonTypeCustom } from "@/hooks/master-data-person-type";
import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { ComboBox, PersonalInfoModel } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import dayjs from "dayjs";
import React, { ReactElement } from "react";
import LabelDetail from "../components/label-detail";

interface DetailSection<T> {
    name?: keyof T
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
    CustomComponent?: ReactElement
    filterData?: (value: any) => string | undefined
}

interface FieldListProps<T> {
    data: T
    personType: Array<ComboBox>
    titles: Array<ComboBox>
    reference: Array<ComboBox>
    countries: Array<ComboBox>
    nation: Array<ComboBox>
}

const fieldList = <T extends PersonalInfoModel>({ data, personType, titles, reference, countries, nation }: FieldListProps<T>): Array<DetailSection<T>> => {

    let isEditable = false;

    return (
        [
            {
                label: 'ประเภทลูกค้า',
                name: 'personTypeCode',
                filterData: (value) => personType.filter(p => p.rValue == value)[0]?.rText || ''
            },
            {
                label: 'ประเภทหลักฐานลูกค้า',
                name: 'referenceType',
                filterData: (value) => reference.filter(p => p.rValue == value)[0]?.rText || ''
            },
            {
                label: 'เลขที่บัตร',
                name: 'referenceID',
            },
            {
                label: 'ประเทศที่ออกบัตร',
                name: 'countryCode',
                filterData: (value) => countries.filter(p => p.rValue == value)[0]?.rText || ''
            },
            {
                label: 'ประเทศเจ้าของสัญชาติ',
                name: 'nationalityCode',
                filterData: (value) => nation.filter(p => p.rValue == value)[0]?.rText || ''
            },
            {
                label: 'วันที่หมดอายุบัตร (ค.ศ.)',
                name: 'identityExpireDate' //identityNeverExpire
            },
            {
                label: 'คำนำหน้า',
                name: 'titleCode',
                filterData: (value) => titles.filter(p => p.rValue == value)[0]?.rText || ''
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

const getValueFromFieldName = (attributeName: string, data: PersonalInfoModel | undefined | null, normalize?: string, filterData?: Function): string | boolean | null => {
    if (!data) return null;
    if (data[attributeName as keyof typeof data] === null) {
        return null;
    }
    let value = data[attributeName as keyof typeof data] || '';
    value = filterData ? filterData(value) : value;
    if (filterData)
        console.log(`value`, typeof filterData, attributeName, data[attributeName as keyof typeof data], value)
    return normalize ? normalizationData(normalize, data as PersonalInfoModel, value) : value
}

const normalizationData = (name: string, personalInfo: PersonalInfoModel, defaultValue: string | boolean): string | null => {
    if (!personalInfo) return null;
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
    const { data: personType = [], isLoading: isLoadingPersonType } = useMasterDataPersonTypeCustom();
    const { data: reference = [], isLoading: isLoadingReference } = useMasterDataReferenceCustom();
    const { data: countries = [], isLoading: isLoadingCountries } = useMasterDataCountriesCustom();
    const { data: titles = [], isLoading: isLoadingTitles } = useMasterDataTitlesCustom();
    const { data: nation = [], isLoading: isLoadingNation } = useMasterDataNationCustom();

    console.log(data?.personalInfo)

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
                        fieldList({
                            data: data?.personalInfo,
                            personType,
                            titles,
                            reference,
                            countries,
                            nation
                        }).map((detail: DetailSection<PersonalInfoModel>, idx: number) => {

                            return <React.Fragment key={`field-item-${idx}`}>
                                <LabelDetail
                                    {...detail}
                                    data={data?.personalInfo}
                                />
                            </React.Fragment>
                            /*
                            const { name = '', label, defaultValue, isRequired, normalize, filterData, CustomComponent } = detail;

                            const _textShow = (getValueFromFieldName(name, data?.personalInfo, normalize, filterData) || '');
                            if (!name) return null//<div key={`field-item-${idx}`} className="min-h-[46px] w-full"></div>
                            if (!_textShow) return null//<div key={`field-item-${idx}`} className="min-h-[46px] w-full"></div>

                            return <React.Fragment key={`field-item-${idx}`}>
                                <InputHorizontal
                                    label={label || ''}
                                    defaultValue={defaultValue}
                                    isEditable={isEditable}
                                    textShow={_textShow.toString()}
                                    name={name}
                                    isRequired={isRequired}
                                />
                            </React.Fragment>
                            */
                        })
                    }
                </div>
            </ContentLoading>
        </>
    )
}