import InputHorizontal from "@/components/custom/input-horizontal"
import IdentityDDL from "@/components/dropdownlist/identity-ddl"
import ReferenceTypeDDL from "@/components/dropdownlist/reference-type-ddl"
import RelationShipDDL from "@/components/dropdownlist/relationship-ddl"
import { BeneficiaryInfoModel } from "@/services/rest-api/customer-service"
import React, { ReactElement } from "react"
import { UseFormReturn } from "react-hook-form"

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
            CustomComponent: <RelationShipDDL
                isEditable={isEditable}
                name="beneficiaryRelationshipCode"
                setValue={(value) => form.setValue(`beneficiaryRelationshipCode` as any, value)}
                defaultValue={form.watch(`beneficiaryRelationshipCode` as any)}
                relationshipOtherName="beneficiaryRelationshipOther"
                setRelationshipOtherValue={(value) => form.setValue(`beneficiaryRelationshipOther` as any, value)}
                defaultRelationshipOtherValue={form.watch(`beneficiaryRelationshipOther` as any)}
            />
        },
        {
            label: 'ประเภทหลักฐานลูกค้า',
            name: 'beneficiaryType',
            CustomComponent: <ReferenceTypeDDL
                name="beneficiaryType"
                isEditable={isEditable}
                setValue={(value) => form.setValue(`beneficiaryType` as any, value)}
                defaultValue={form.watch(`beneficiaryType` as any)}
            />
        },
        {
            label: 'เลขที่บัตร',
            name: 'beneficiaryNo'
        },
        {
            name: 'beneficiaryExpireDate',
            CustomComponent: <IdentityDDL
                isEditable={isEditable}
                name="beneficiaryExpireDate"
                defaultValue={form.watch(`beneficiaryExpireDate` as any)}
                setValue={(value) => form.setValue(`beneficiaryExpireDate` as any, value)}
                identityNeverExpireName="beneficiaryNeverExpire"
                defaultIdentityNeverExpireValue={form.watch(`beneficiaryNeverExpire` as any)}
                setIdentityNeverExpireValue={(value) => form.setValue(`beneficiaryNeverExpire` as any, value)}
            />
        },
    ]
)

const PersonForm = (props: PersonFormProps) => {

    const { form, dataInfo, isEditable, getValueFromFieldName, normalizationData } = props;
    const { getValues, setValue, watch } = form

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
                        defaultValue={getValues(name || '')?.toString()}
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