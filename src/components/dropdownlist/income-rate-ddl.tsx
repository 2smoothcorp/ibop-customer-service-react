import { useMasterDataIncomeRateCustom } from "@/hooks/masterDataIncomeRateHook";
import InputAutoComplete from "../custom/input-auto-complete";
import { DropDownListProps } from "./ddl.type";

export interface IncomeRateDDLProps extends DropDownListProps {
    isEditable?: boolean
    onChange?: (value: string) => void;
}

const IncomeRateDDL = (props: IncomeRateDDLProps) => {

    const { data: incomeRate, isLoading } = useMasterDataIncomeRateCustom();

    return <>
        <InputAutoComplete
            placeholder={props.placeHolder || "โปรดเลือกรายได้ต่อเดือน"}
            name={props.name}
            defaultValue={props.defaultValue || ""}
            list={incomeRate || []}
            disabled={props.isEditable}
            onChange={(v) => {
                props?.onChange?.(v)
            }}
            required={props.isRequired}
        />
    </>
}

export default IncomeRateDDL;