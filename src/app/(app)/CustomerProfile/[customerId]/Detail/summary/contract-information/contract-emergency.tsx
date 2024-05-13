import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { CustomerContractState } from "@/libs/redux/store/customer-contract-slice";
import { EmergencyContactInfoModel } from "@/services/rest-api/customer-service";
import { Property } from "csstype";
import { ReactElement } from "react";

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

export default function SummaryContractEmergencyInfo({ data }: { data: CustomerContractState }) {

    const isEditable = false;

    const _dataList = data.emergencyContactInfo;

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
                    _dataList.map(_data => {
                        return fieldList({ data: _data }).map((detail: DetailSection<EmergencyContactInfoModel>, idx: number) => {
                            const { name, label, defaultValue, isRequired, normalize, CustomComponent, condition, isFull, labelAlign } = detail

                            if (!name) return <div key={`field-item-${idx}`}></div>
                            if (condition && typeof condition === 'function' && !condition(_data)) return null

                            const _textShow = (getValueFromFieldName(name, _data, normalize) || '').toString();
                            //if (CustomComponent) return CustomComponent
                            return <div key={`field-item-${idx}`} className={isFull ? `col-span-3` : ``}>
                                <InputHorizontal
                                    label={label || ''}
                                    defaultValue={defaultValue}
                                    isEditable={isEditable}
                                    textShow={_textShow}
                                    name={name}
                                    isRequired={isRequired}
                                    labelAlign={labelAlign}
                                    isLabelFullWidth={isFull}
                                />
                            </div>
                        })
                    })
                }

            </div>
        </ContentLoading>
    </>
}