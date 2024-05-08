import { useMasterDataNationCustom } from "@/hooks/master-data-nation";
import InputHorizontal from "../custom/input-horizontal";
import { DropDownListProps } from "./ddl.type";

export interface NationDDLProps extends DropDownListProps {
    isEditable?: boolean
}

const NationDDL = (props: NationDDLProps) => {

    const { data: nation, isLoading: isLoadingNation } = useMasterDataNationCustom();

    return <>
        <InputHorizontal
            label={props.label || "ประเทศเจ้าของสัญชาติ"}
            placeholder={props.placeHolder || "โปรดเลือกประเทศเจ้าของสัญชาติ"}
            defaultValue={props.defaultValue || props.textShow}
            textShow={props.textShow || '-'}
            isEditable={props.isEditable}
            name={props.name}
            type="autocomplete"
            list={nation}
            isRequired
            onChange={(value) => props?.setValue?.(value)}
        />
    </>
}

export default NationDDL;