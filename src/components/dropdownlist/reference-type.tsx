import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import InputHorizontal from "../custom/input-horizontal";
import { DropDownListProps } from "./ddl.type";

export interface ReferenceTypeDDLProps extends DropDownListProps {
    isEditable?: boolean
}

const ReferenceTypeDDL = (props: ReferenceTypeDDLProps) => {

    const { data: reference, isLoading: isLoadingReference } = useMasterDataReferenceCustom();

    return <>
        <InputHorizontal
            label={props.label || "ประเภทหลักฐานลูกค้า"}
            placeholder={props.placeHolder || "โปรดเลือกประเภทหลักฐานลูกค้า"}
            defaultValue={props.textShow}
            textShow={props.textShow || '-'}
            isEditable={props.isEditable}
            name="referenceType"
            type="autocomplete"
            list={reference}
            isRequired
            onChange={(value) => props?.setValue?.(value)}
        />
    </>
}

export default ReferenceTypeDDL;