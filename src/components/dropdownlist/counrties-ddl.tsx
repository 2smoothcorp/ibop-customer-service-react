import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { UseFormRegister } from "react-hook-form";
import InputAutoComplete from "../custom/input-auto-complete";

export interface CountriesDDLProps {
    name: string;
    label?: string;
    textShow?: string;
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    register?: UseFormRegister<any>;
    onChange?: (value: string) => void;
    isEditable?: boolean;
    placeHolder?: string;
    isRequired?: boolean;
}

const CountriesDDL = (props: CountriesDDLProps) => {
    const { name, label, value, defaultValue, onChange, isEditable, placeHolder, isRequired } = props
    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();

    return (<InputAutoComplete
        placeholder={placeHolder || "โปรดเลือกประเทศ"}
        name={name}
        //value={value}
        defaultValue={defaultValue}
        list={countries || []}
        disabled={isEditable}
        onChange={(v) => {
            onChange?.(v)
        }}
        required={isRequired}
    />)
}

export default CountriesDDL;