import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import InputHorizontal from "../custom/input-horizontal";
import { DropDownListProps } from "./ddl.type";

export interface TitleDDLProps extends DropDownListProps {
    isEditable?: boolean
}

const TitleDDL = (props: TitleDDLProps) => {

    const { data: titles, isLoading: isLoadingTitles } = useMasterDataTitlesCustom();

    return <>
        <InputHorizontal
            label={props.label || "คำนำหน้า"}
            placeholder={props.placeHolder || "โปรดเลือกคำนำหน้า"}
            defaultValue={props.defaultValue || props.textShow}
            textShow={props.textShow || '-'}
            isEditable={props.isEditable}
            name={props.name}
            type="autocomplete"
            list={titles}
            isRequired
            onChange={(value) => props?.setValue?.(value)}
        />
    </>
}

export default TitleDDL;