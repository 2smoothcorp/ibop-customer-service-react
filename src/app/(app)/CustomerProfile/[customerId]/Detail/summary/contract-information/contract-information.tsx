import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { AddressInfoModel, DocReceiveAddressInfoModel } from "@/services/rest-api/customer-service";
import { Property } from "csstype";
import React, { ReactElement } from "react";
import { ContractConfirm } from "../../../../../../../libs/redux/store/customer-contract-slice";
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
//contractInformation

const fieldList = ({ data }: { data: DocReceiveAddressInfoModel }): Array<DetailSection<DocReceiveAddressInfoModel>> => {
    return (
        [
            {
                label: 'วิธีการรับเอกสาร Mailing Method (กรุณาเลือกเพียง 1 ช่องทาง)',
                name: 'docReceiveChannel',
                isFull: true,
                labelAlign: 'left'
            },
            {
                label: 'ที่อยู่ติดต่อทางไปรษณีย์กรณีบริษัทส่งเอกสารอื่นๆ รวมถึงเอกสารจากนายทะเบียนหลักทรัพย์/ศูนย์รับฝากหลักทรัพย์ฯ ที่ต้องติดต่อทางไปรษณีย์ (กรุณาระบุข้อความให้ครบถ้วนแม้ว่าท่านจะได้ระบุวิธีการรับเอกสารทางอีเมล)',
                name: 'docReceiveAddressType',
                isFull: true,
                labelAlign: 'left'
            }
        ]
    )
}

const addressFieldList = ({ data }: { data: DocReceiveAddressInfoModel }): Array<DetailSection<DocReceiveAddressInfoModel>> => {
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
                condition: (data: DocReceiveAddressInfoModel) => data.countryCode !== '000'
            },
            {
                label: 'ที่อยู่ 2',
                name: 'customAddress2',
                condition: (data: DocReceiveAddressInfoModel) => data.countryCode !== '000'
            },
            {
                label: 'ที่อยู่ 3',
                name: 'customAddress3',
                condition: (data: DocReceiveAddressInfoModel) => data.countryCode !== '000'
            },
            {
                label: 'จังหวัด',
                name: 'provinceCode',
                condition: (data: DocReceiveAddressInfoModel) => data.countryCode === '000'
            },
            {
                label: 'อำเภอ / เขต',
                name: 'districtCode',
                condition: (data: DocReceiveAddressInfoModel) => data.countryCode === '000'
            },
            {
                label: 'ตำบล / แขวง',
                name: 'subDistrictCode',
                condition: (data: DocReceiveAddressInfoModel) => data.countryCode === '000'
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

export default function SummaryContractInformationInfo({ data }: { data: ContractConfirm }) {

    const isEditable = false;
    const _data = data?.docReceiveAddressInfo;

    return <>
        <HeaderTitle
            className={'ml-8'}
            title="ข้อมูลการติดต่อ CONTRACT INFORMATION"
        />
        <ContentLoading
            isLoading={false}
            error={undefined}
        >
            {
                _data &&
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            fieldList({ data: _data })?.map((detail: DetailSection<DocReceiveAddressInfoModel>, idx: number) => {
                                return <React.Fragment key={`field-item-${idx}`}>
                                    <LabelDetail
                                        {...detail}
                                        data={_data}
                                    />
                                </React.Fragment>
                            })
                        }

                        {

                            data?.docReceiveAddressInfo?.docReceiveAddressType === '04' ?
                                addressFieldList({ data: _data }).map((detail: DetailSection<DocReceiveAddressInfoModel>, idx: number) => {
                                    return <React.Fragment key={`field-item-${idx}`}>
                                        <LabelDetail
                                            {...detail}
                                            data={_data}
                                        />
                                    </React.Fragment>

                                }) :
                                null
                        }
                    </div>
                </>
            }
        </ContentLoading>
    </>
}