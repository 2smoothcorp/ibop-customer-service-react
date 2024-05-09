import InputHorizontal from "@/components/custom/input-horizontal";
import InputText from "@/components/custom/input-text";
import { useMasterDataRelationCustom } from "@/hooks/master-data-relation";
import { useState } from "react";

export interface RelationShipDDLProps {
    name: string
    isEditable?: boolean
    label?: string
    placeHolder?: string
    defaultValue?: string
    setValue?: (value: string) => void
    defaultRelationshipOtherValue?: string
    relationshipOtherName: string
    setRelationshipOtherValue?: (value: string) => void
}

const RelationShipDDL = (props: RelationShipDDLProps) => {

    const {
        name,
        label,
        placeHolder,
        defaultValue,
        isEditable,
        setValue,
        defaultRelationshipOtherValue,
        relationshipOtherName,
        setRelationshipOtherValue
    } = props
    const { data: relation = [], isLoading: isLoadingRelation } = useMasterDataRelationCustom();

    const [relationShipCode, setRelationShipCode] = useState(defaultValue || '');
    const [relationshipOther, setRelationshipOther] = useState(defaultRelationshipOtherValue || '');

    return (
        <InputHorizontal
            label={label || "ความสัมพันธ์"}
            placeholder={placeHolder || "โปรดเลือกความสัมพันธ์"}
            defaultValue={defaultValue || relationShipCode}
            isEditable={isEditable}
            name={name}
            type="autocomplete"
            list={relation}
            isRequired
            onChange={(value) => {
                setRelationShipCode(value)
                setValue?.(value)
            }}
            rightInputComponent={
                relationShipCode === '4' && (
                    <InputText
                        className="ml-2"
                        name={relationshipOtherName}
                        defaultValue={defaultRelationshipOtherValue || relationshipOther}
                        onChange={(value) => {
                            setRelationshipOther(value)
                            setRelationshipOtherValue?.(value)
                        }}
                    />
                )
            }
        />
    )
}

export default RelationShipDDL;