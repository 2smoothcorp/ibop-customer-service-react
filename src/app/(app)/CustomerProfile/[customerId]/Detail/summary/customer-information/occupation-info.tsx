import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { PersonalConfirm } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel, OccupationInfoModel } from "@/services/rest-api/customer-service";
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
}

interface JobDetailAddressModel extends AddressInfoModel, OccupationInfoModel {
    isAddressInfoType3SameType?: string
}

const fieldList = ({ data }: { data: JobDetailAddressModel }): Array<DetailSection<JobDetailAddressModel>> => {
    return (
        [
            {
                label: 'อาชีพ',
                name: 'occupationCode',
            },
            {
                label: 'อาชีพโปรดระบุ',
                name: 'occupationDescOther',
                condition: (data) => ["28", "44", "60", "76"].includes(data?.occupationCode || '')
            }
        ]
    )
}

const jobDetailFieldList = ({ data }: { data: JobDetailAddressModel }): Array<DetailSection<JobDetailAddressModel>> => {
    return (
        [
            {
                label: 'ชื่อสถานที่ทำงาน / สถานศึกษา',
                name: 'jobWorkPlace'
            },
            {
                label: 'ตำแหน่งงาน',
                name: 'jobPosition'
            },
            {
                label: 'ฝ่าย',
                name: 'jobDepartment'
            },
            {
                label: 'ที่อยู่สถานที่ทำงาน',
                name: 'isAddressInfoType3SameType'
            }
        ]
    )
}

const jobAddress03_FieldList = ({ data }: { data: JobDetailAddressModel }): Array<DetailSection<JobDetailAddressModel>> => {
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

const getValueFromFieldName = (attributeName: string, data: AddressInfoModel | OccupationInfoModel | undefined | null, normalize?: string): string | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as OccupationInfoModel | AddressInfoModel, value) : value
}

const normalizationData = (name: string, data: JobDetailAddressModel, defaultValue: string | boolean): string => {
    switch (name) {
        case 'addressType':
            return defaultValue === '01' ? `ตามประเภทหลักฐาน` : `อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)`;
        default:
            return defaultValue.toString() || '-';
    }
}

export default function SummaryOccupationInfo({ data }: { data: PersonalConfirm }) {

    const isEditable = false;

    const _data = data.occupationInfo as OccupationInfoModel;
    const _dataAddress = data.addressInfoType3;


    return <>
        <HeaderTitle
            className={'ml-8'}
            title="อาชีพ"
        />
        <ContentLoading
            isLoading={false}
            error={undefined}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {

                    fieldList({ data: { ..._data, isAddressInfoType3SameType: data?.isAddressInfoType3SameType } }).map((detail: DetailSection<OccupationInfoModel>, idx: number) => {
                        return <React.Fragment key={`field-item-${idx}`}>
                            <LabelDetail
                                {...detail}
                                data={_data}
                            />
                        </React.Fragment>
                    })
                }
                {
                    !["01", "02", "03", "04", "05", "06", '-'].includes(_data?.occupationCode || '') ?
                        <>
                            <div></div>
                            <div></div>
                            {jobDetailFieldList({ data: _data }).map((detail: DetailSection<JobDetailAddressModel>, idx: number) => {
                                return <React.Fragment key={`field-item-${idx}`}>
                                    <LabelDetail
                                        {...detail}
                                        data={_data}
                                    />
                                </React.Fragment>
                            })}
                        </>
                        :
                        null
                }

                {/*
                    _data?.addressType === '03' ?
                        <>
                            <div></div>
                            <div></div>
                            {jobAddress03_FieldList({ data: _dataAddress }).map((detail: DetailSection<JobDetailAddressModel>, idx: number) => {
                                return <React.Fragment key={`field-item-${idx}`}>
                                    <LabelDetail
                                        {...detail}
                                        data={_dataAddress}
                                    />
                                </React.Fragment>
                            })}
                        </>
                        :
                        null
                */}
            </div>
        </ContentLoading>
    </>
}