import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { PoliticRelationInfoModel } from "@/services/rest-api/customer-service";
import React from "react";
import LabelDetail, { LabelDetailProps } from "../components/label-detail";

const fieldList = ({ data }: { data: PoliticRelationInfoModel }): Array<LabelDetailProps<PoliticRelationInfoModel>> => {
    return (
        [
            {
                label: 'ท่านเป็นผู้มีสถานภาพทางการเมืองหรือเป็นสมาชิกในครอบครัว หรือเป็นผู้ใกล้ชิดกับบุคคลผู้มีสถานภาพทางการเมืองหรือไม่',
                name: 'politicianRelation',
                isFullRow: true,
                labelAlign: 'left',
                normalize: `politicianRelation`,
                normalizationData: (data) => data?.politicianRelation ? `ใช่` : `ไม่ใช่`
            },
            {
                label: 'ระบุตำแหน่ง',
                name: 'politicianPosition',
                labelAlign: 'left'
            }
        ]
    )
}

const normalizationData = (name: string, data: PoliticRelationInfoModel, defaultValue: string | boolean): string => {
    switch (name) {
        case 'politicianRelation':
            return data?.politicianRelation ? `ใช่` : `ไม่ใช่`;
        default:
            return defaultValue.toString() || '-';
    }
}

export default function SummaryPoliticRelationInfo({ data }: { data: CustomerInformationState }) {

    const isEditable = false;


    const _data = data.politicRelationInfo;

    return <>
        <HeaderTitle
            className={'ml-8'}
            title="สถานภาพทางการเมือง"
        />
        <ContentLoading
            isLoading={false}
            error={undefined}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {

                    fieldList({ data: _data }).map((detail: LabelDetailProps<PoliticRelationInfoModel>, idx: number) => {
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