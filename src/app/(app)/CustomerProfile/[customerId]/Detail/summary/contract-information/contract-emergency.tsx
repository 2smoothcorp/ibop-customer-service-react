import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { EmergencyContactInfoModel } from "@/services/rest-api/customer-service";
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

const fieldList = ({ data }: { data: EmergencyContactInfoModel }): Array<DetailSection<EmergencyContactInfoModel>> => {
    return (
        [
            {
                label: 'ชื่อ-นามสกุล',
                name: 'name',
            },
            {
                label: 'โทรศัพท์มือถือ',
                name: 'mobile',
            },
            {
                label: 'ความสัมพันธ์',
                name: 'relationshipCode',
            }
        ]
    )
}

const getValueFromFieldName = (attributeName: string, data: EmergencyContactInfoModel | undefined | null, normalize?: string): string | number | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as EmergencyContactInfoModel, value) : value
}

const normalizationData = (name: string, data: EmergencyContactInfoModel, defaultValue: string | number | boolean): string => {
    switch (name) {
        case 'addressTypeCode':
            return defaultValue === '01' ? `ตามประเภทหลักฐาน` : `อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)`;
        default:
            return defaultValue?.toString() || '-';
    }
}

export default function SummaryContractEmergencyInfo({ data }: { data: ContractConfirm }) {

    const isEditable = false;

    const _dataList = data?.emergencyContactInfo;

    return <>
        <HeaderTitle
            className={'ml-8'}
            title="ข้อมูลการติดต่อ CONTRACT INFORMATION"
        />
        <ContentLoading
            isLoading={false}
            error={undefined}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    _dataList?.map(_data => {
                        return fieldList({ data: _data }).map((detail: DetailSection<EmergencyContactInfoModel>, idx: number) => {
                            return <React.Fragment key={`field-item-${idx}`}>
                                <LabelDetail
                                    {...detail}
                                    data={_data}
                                />
                            </React.Fragment>
                        })
                    })
                }

            </div>
        </ContentLoading>
    </>
}