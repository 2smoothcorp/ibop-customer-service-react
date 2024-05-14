import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { PersonalConfirm } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel } from "@/services/rest-api/customer-service";
import { Property } from "csstype";
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
    condition?: (data: T) => boolean
    isFull?: boolean
    labelAlign?: Property.TextAlign
}

const fieldList = <T extends AddressInfoModel>({ data }: { data: T }): Array<DetailSection<T>> => {
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

const normalizationData = (name: string, data: AddressInfoModel, defaultValue: string | boolean): string => {
    switch (name) {
        case 'addressTypeCode':
            return defaultValue === '01' ? `ตามประเภทหลักฐาน` : `อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)`;
        default:
            return defaultValue.toString() || '-';
    }
}

export default function SummaryAddressByTypeInfo({ data }: { data: PersonalConfirm }) {

    const _data = data.addressInfoType1 as AddressInfoModel;

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
                    fieldList<AddressInfoModel>({ data: _data }).map((detail: DetailSection<AddressInfoModel>, idx: number) => {
                        return <React.Fragment key={`field-item-${idx}`}>
                            <LabelDetail
                                {...detail}
                                data={_data}
                            />
                        </React.Fragment>
                    })
                }
            </div>
        </ContentLoading>
    </>
}