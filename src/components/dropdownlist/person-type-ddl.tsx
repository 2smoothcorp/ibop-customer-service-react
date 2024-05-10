import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import InputHorizontal from "../custom/input-horizontal";
import { DropDownListProps } from "./ddl.type";
import { useMasterDataPersonTypeCustom } from "@/hooks/master-data-person-type";

export interface PersonTypeDDLProps extends DropDownListProps {
    isEditable?: boolean
}

const PersonTypeDDL = (props: PersonTypeDDLProps) => {

    const { data: personType, isLoading: isLoadingPersonType } = useMasterDataPersonTypeCustom();

    return <>
        <InputHorizontal
            name={ props.name || "referenceType"}
            label={props.label || "ประเภทหลักฐานลูกค้า"}
            placeholder={props.placeHolder || "โปรดเลือกประเภทหลักฐานลูกค้า"}
            defaultValue={props.textShow || props.defaultValue}
            textShow={props.textShow || '-'}
            isEditable={props.isEditable}
            type="autocomplete"
            list={personType}
            isRequired
            onChange={(value) => props?.setValue?.(value)}
        />
    </>
}

export default PersonTypeDDL;