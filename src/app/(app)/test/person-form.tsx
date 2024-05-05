import InputHorizontal from "@/components/custom/input-horizontal"
import { BeneficiaryInfoModel } from "@/services/rest-api/customer-service"
import { AddressInfo } from "net"
import React, { ReactElement } from "react"
import { UseFormReturn } from "react-hook-form"
import IdentityForm from "./identity-form"
import RelationShipForm from "./relationship-form"

export interface PersonFormProps {
    form: UseFormReturn<AddressInfo & BeneficiaryInfoModel>
    dataInfo: BeneficiaryInfoModel
    isEditable?: boolean
}

interface DetailSection {
    name: keyof BeneficiaryInfoModel
    label?: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
    onChange?: (value: string) => void
    CustomComponent?: ReactElement
}

const fieldList = ({ form, isEditable }: { form: UseFormReturn<AddressInfo & BeneficiaryInfoModel>, isEditable?: boolean }): Array<DetailSection> => (
    [
        {
            label: 'ชื่อ',
            name: 'beneficiaryFirstName'
        },
        {
            label: 'นามสกุล',
            name: 'beneficiaryLastName'
        },
        {
            label: 'ความสัมพันธ์',
            name: 'buildingOrVillage',
            CustomComponent: <RelationShipForm
                name="beneficiaryRelationshipCode"
                relationshipOtherName="beneficiaryRelationshipOther"
                isEditable={isEditable}
            />
        },
        {
            label: 'ประเภทหลักฐานลูกค้า',
            name: 'beneficiaryType'
        },
        {
            label: 'เลขที่บัตร',
            name: 'beneficiaryNo'
        },
        {
            name: 'beneficiaryExpireDate',
            CustomComponent: <IdentityForm name="beneficiaryExpireDate" identityNeverExpireName="beneficiaryNeverExpire" isEditable={isEditable} />
        },
    ]
)

const getValueFromFieldName = (attributeName: string, data: BeneficiaryInfoModel | undefined, normalize?: string): string | boolean => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as BeneficiaryInfoModel, value) : value
}

const normalizationData = (attributeName: string, data: BeneficiaryInfoModel | undefined, defaultValue: string) => {
    return defaultValue || ''
}

const PersonForm = (props: PersonFormProps) => {

    const { form, dataInfo, isEditable } = props;
    const { register, setValue, watch } = form

    return (<>
        {
            fieldList({ form, isEditable }).map((detail: DetailSection, idx: number) => {
                const { name, label, defaultValue, isRequired, normalize, CustomComponent } = detail
                const _value = getValueFromFieldName(name, dataInfo, normalize);
                const textShow = watch(name);

                if (CustomComponent) return CustomComponent
                return <React.Fragment key={`field-item-${idx}`}>
                    <InputHorizontal
                        label={label || ''}
                        defaultValue={_value || ''}
                        isEditable={isEditable}
                        textShow={textShow || ''}
                        name={name}
                        isRequired={isRequired}
                        onChange={(value) => setValue(name, value, { shouldDirty: true })}
                    />
                </React.Fragment>
            })
        }
    </>)
}

export default PersonForm;