import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { SpouseInfoModel } from "@/services/rest-api/customer-service";
import React, { ReactElement } from "react";

interface DetailSection {
    name?: keyof SpouseInfoModel
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
    CustomComponent?: ReactElement
}

const fieldList = ({ data }: { data: SpouseInfoModel }): Array<DetailSection> => {
    return (
        [
            {
                label: 'สถานภาพ',
                name: 'familyStatus'
            }
        ]
    )
}

const marriedFieldList = ({ data }: { data: SpouseInfoModel }): Array<DetailSection> => {
    return (
        [
            {
                label: 'ประเภทหลักฐานลูกค้า',
                name: 'spouseReferenceType'
            },
            {
                label: 'เลขที่บัตร',
                name: 'spouseIdentityId'
            },
            {
                label: 'คำนำหน้า',
                name: 'spouseTitleCode'
            },
            {
                label: 'ชื่อคู่สมรส',
                name: 'spouseFirstName'
            },
            {
                label: 'นามสกุลคู่สมรส',
                name: 'spouseLastName'
            }
        ]
    )
}

const getValueFromFieldName = (attributeName: string, data: SpouseInfoModel | undefined | null, normalize?: string): string | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as SpouseInfoModel, value) : value
}

const normalizationData = (name: string, data: SpouseInfoModel, defaultValue: string | boolean): string => {
    switch (name) {
        default:
            return defaultValue.toString() || '-';
    }
}

export default function SummarySpouseInfo({ data }: { data: CustomerInformationState }) {

    const isEditable = false;

    return <>
        <HeaderTitle
            className={'ml-8'}
            title="สถานภาพการสมรส"
        />
        <ContentLoading
            isLoading={false}
            error={undefined}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    fieldList({ data: data.spouseInfo }).map((detail: DetailSection, idx: number) => {
                        const { name, label, defaultValue, isRequired, normalize, CustomComponent } = detail
                        if (!name) return <div key={`field-item-${idx}`}></div>
                        const _textShow = (getValueFromFieldName(name, data.spouseInfo, normalize) || '').toString();
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
                {
                    data.spouseInfo.familyStatus === 'สมรส'
                        ?
                        <>
                            {
                                marriedFieldList({ data: data.spouseInfo }).map((detail: DetailSection, idx: number) => {
                                    const { name, label, defaultValue, isRequired, normalize, CustomComponent } = detail
                                    if (!name) return <div key={`field-item-${idx}`}></div>
                                    const _textShow = (getValueFromFieldName(name, data.spouseInfo, normalize) || '').toString();
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
                        </>
                        :
                        null
                }
            </div>
        </ContentLoading>
    </>
}