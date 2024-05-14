import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { PersonalConfirm } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel } from "@/services/rest-api/customer-service";
import React from "react";
import LabelDetail, { LabelDetailProps } from "../components/label-detail";

const fieldList = <T extends PersonalConfirm>({ data }: { data: T }): Array<LabelDetailProps<T>> => {
    return (
        [
            {
                label: '',
                name: 'isAddressInfoType2SameType',
                normalize: 'addressTypeCode'
            }
        ]
    )
}

const AddressOtherfieldList = <T extends AddressInfoModel>({ data }: { data: T }): Array<LabelDetailProps<T>> => {
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

            },
            {
                label: 'ที่อยู่ 2',
                name: 'customAddress2',

            },
            {
                label: 'ที่อยู่ 3',
                name: 'customAddress3',

            },
            {
                label: 'จังหวัด',
                name: 'provinceCode',

            },
            {
                label: 'อำเภอ / เขต',
                name: 'districtCode',

            },
            {
                label: 'ตำบล / แขวง',
                name: 'subDistrictCode',

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

export default function SummaryAddressByCurrentInfo({ data }: { data: PersonalConfirm }) {

    const isEditable = false;

    const _data = data.addressInfoType2 as AddressInfoModel;

    return <>
        <HeaderTitle
            className={'ml-8'}
            title="ที่อยู่ปัจจุบันที่ติดต่อได้"
        />
        <ContentLoading
            isLoading={false}
            error={undefined}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    fieldList<PersonalConfirm>({ data: data }).map((detail: LabelDetailProps<PersonalConfirm>, idx: number) => {
                        return <React.Fragment key={`field-item-${idx}`}>
                            <LabelDetail
                                {...detail}
                                data={data}
                            />
                        </React.Fragment>
                    })
                }
                <div></div>
                <div></div>
                {/*
                    !data.isAddressInfoType2SameType && !data.isAddressInfoType3SameType ?
                        AddressOtherfieldList({ data: _data }).map((detail: DetailSection, idx: number) => {
                            const { name, label, defaultValue, isRequired, normalize, CustomComponent } = detail
                            if (!name) return <div key={`field-item-${idx}`}></div>
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
                        }) :
                        null
                    */}
            </div>
        </ContentLoading>
    </>
}