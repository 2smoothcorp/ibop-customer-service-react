import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { PoliticRelationInfoModel } from "@/services/rest-api/customer-service";
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
    labelAlign?: string
}

const fieldList = ({ data }: { data: PoliticRelationInfoModel }): Array<DetailSection<PoliticRelationInfoModel>> => {
    return (
        [
            {
                label: 'ท่านเป็นผู้มีสถานภาพทางการเมืองหรือเป็นสมาชิกในครอบครัว หรือเป็นผู้ใกล้ชิดกับบุคคลผู้มีสถานภาพทางการเมืองหรือไม่',
                name: 'politicianRelation',
                isFull: true,
                labelAlign: 'left',
                normalize: `politicianRelation`
            },
            {
                label: 'ระบุตำแหน่ง',
                name: 'politicianPosition',
                labelAlign: 'left'
            }
        ]
    )
}

const getValueFromFieldName = (attributeName: string, data: PoliticRelationInfoModel | undefined | null, normalize?: string): string | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as PoliticRelationInfoModel, value) : value
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

                    fieldList({ data: _data }).map((detail: DetailSection<PoliticRelationInfoModel>, idx: number) => {
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
                }
            </div>
        </ContentLoading>
    </>
}