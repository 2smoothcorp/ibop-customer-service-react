import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel } from "@/services/rest-api/customer-service";
import React, { ReactElement } from "react";

interface DetailSection {
    name?: keyof AddressInfoModel
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
    CustomComponent?: ReactElement
    condition?: (data: AddressInfoModel) => boolean
}

const fieldList = ({ data }: { data: AddressInfoModel }): Array<DetailSection> => {
    return (
        [
            {
                label: 'เลขที่',
                name: 'addressNo'
            },
            {
                label: 'หมู่ที่',
                name: 'moo'
            },
            {
                label: 'หมู่บ้าน / อาคาร',
                name: 'buildingOrVillage'
            },
            {
                label: 'เลขที่ห้อง',
                name: 'roomNo'
            },
            {
                label: 'ชั้น',
                name: 'floor'
            },
            {
                label: 'ตรอก / ซอย',
                name: 'soi'
            },
            {
                label: 'ถนน',
                name: 'street'
            },
            {
                label: 'ประเทศ',
                name: 'countryCode'
            },
            {
                label: 'รหัสไปรษณีย์',
                name: 'zipCode'
            },
            {
                label: 'ที่อยู่ 1',
                name: 'customAddress1',
                condition: (data: AddressInfoModel) => data.countryCode !== '000'
            },
            {
                label: 'ที่อยู่ 2',
                name: 'customAddress2',
                condition: (data: AddressInfoModel) => data.countryCode !== '000'
            },
            {
                label: 'ที่อยู่ 3',
                name: 'customAddress3',
                condition: (data: AddressInfoModel) => data.countryCode !== '000'
            },
            {
                label: 'จังหวัด',
                name: 'provinceCode',
                condition: (data: AddressInfoModel) => data.countryCode === '000'
            },
            {
                label: 'อำเภอ / เขต',
                name: 'districtCode',
                condition: (data: AddressInfoModel) => data.countryCode === '000'
            },
            {
                label: 'ตำบล / แขวง',
                name: 'subDistrictCode',
                condition: (data: AddressInfoModel) => data.countryCode === '000'
            }
        ]
    )
}

const getValueFromFieldName = (attributeName: string, data: AddressInfoModel | undefined | null, normalize?: string): string | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as AddressInfoModel, value) : value
}

const normalizationData = (name: string, data: AddressInfoModel, defaultValue: string | boolean): string => {
    switch (name) {
        case 'addressTypeCode':
            return defaultValue === '01' ? `ตามประเภทหลักฐาน` : `อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)`;
        default:
            return defaultValue.toString() || '-';
    }
}

export default function SummaryAddressByTypeInfo({ data }: { data: CustomerInformationState }) {

    const isEditable = false;

    const _data = data.addressByType;

    return <>
        <HeaderTitle
            className={'ml-8'}
            title="ที่อยู่ตามประเภทหลักฐาน"
        />
        <ContentLoading
            isLoading={false}
            error={undefined}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    fieldList({ data: _data }).map((detail: DetailSection, idx: number) => {
                        const { name, label, defaultValue, isRequired, normalize, CustomComponent, condition } = detail

                        if (!name) return <div key={`field-item-${idx}`}></div>
                        if (condition && typeof condition === 'function' && !condition(_data)) return null

                        const _textShow = (getValueFromFieldName(name, _data, normalize) || '').toString();
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
}