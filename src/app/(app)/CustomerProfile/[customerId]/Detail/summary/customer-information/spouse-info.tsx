import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { PersonalConfirm } from "@/libs/redux/store/customer-information-slice";
import { SpouseInfoModel } from "@/services/rest-api/customer-service";
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

const fieldList = <T extends SpouseInfoModel>({ data }: { data?: T }): Array<DetailSection<T>> => {
    return (
        [
            {
                label: 'สถานภาพ',
                name: 'familyStatus'
            }
        ]
    )
}

const marriedFieldList = <T extends SpouseInfoModel>({ data }: { data?: T }): Array<DetailSection<T>> => {
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

export default function SummarySpouseInfo({ data }: { data: PersonalConfirm }) {

    const isEditable = false;
    const _data = data?.spouseInfo as SpouseInfoModel;

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
                    fieldList({ data: _data }).map((detail: DetailSection<SpouseInfoModel>, idx: number) => {
                        return <React.Fragment key={`field-item-${idx}`}>
                            <LabelDetail
                                {...detail}
                                data={_data}
                            />
                        </React.Fragment>
                    })
                }
                {
                    _data?.familyStatus === 'สมรส'
                        ?
                        <>
                            {
                                marriedFieldList({ data: _data }).map((detail: DetailSection<SpouseInfoModel>, idx: number) => {
                                    return <React.Fragment key={`field-item-${idx}`}>
                                        <LabelDetail
                                            {...detail}
                                            data={_data}
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