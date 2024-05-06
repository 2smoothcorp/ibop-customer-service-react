import InputHorizontal from "@/components/custom/input-horizontal"
import ReferenceTypeDDL from "@/components/dropdownlist/reference-type"
import { BeneficiaryInfoModel } from "@/services/rest-api/customer-service"
import React, { ReactElement } from "react"
import { UseFormReturn } from "react-hook-form"
import IdentityForm from "./identity-form"
import RelationShipForm from "./relationship-form"

export interface PersonFormProps {
    form: UseFormReturn<BeneficiaryInfoModel, any, undefined>
    dataInfo: BeneficiaryInfoModel | null | undefined
    isEditable?: boolean
    getValueFromFieldName: (attributeName: string, data: BeneficiaryInfoModel | undefined | null, normalize?: string) => string | boolean
    normalizationData: (attributeName: string, data: BeneficiaryInfoModel | undefined, defaultValue: string | boolean) => string | boolean
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

const fieldList = ({ form, isEditable }: { form: UseFormReturn<BeneficiaryInfoModel>, isEditable?: boolean }): Array<DetailSection> => (
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
            name: 'beneficiaryType',
            CustomComponent: <ReferenceTypeDDL
                name="beneficiaryType"
                isEditable={isEditable}
            />
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

const PersonForm = (props: PersonFormProps) => {

    const { form, dataInfo, isEditable, getValueFromFieldName, normalizationData } = props;
    const { register, setValue, watch } = form

    return (<>
        {
            fieldList({ form, isEditable }).map((detail: DetailSection, idx: number) => {
                const { name, label, defaultValue, isRequired, normalize, CustomComponent } = detail
                const _value = getValueFromFieldName(name, dataInfo, normalize);
                const textShow = watch(name)?.toString();

                if (CustomComponent) return CustomComponent
                return <React.Fragment key={`field-item-${idx}`}>
                    <InputHorizontal
                        label={label || ''}
                        defaultValue={_value.toString() || ''}
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