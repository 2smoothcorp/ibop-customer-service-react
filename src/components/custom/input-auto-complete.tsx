import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function InputAutoComplete({
    name,
    defaultValue,
    placeholder,
    required = false,
    list = [],
    disabled = false,
    onChange,
}: InputAutoCompleteProps) {

    const [data, setData] = useState<InputAutoCompleteValue | null>(null);

    useEffect(() => {
        if (defaultValue && list.length > 0) {
            const result = list.find(item => item.value === defaultValue)
            if (result) {
                setData(result);
            }
        }
    }, [defaultValue, list]);


    // if (!defaultValueItem) return <></>

    return (
        <Autocomplete
            fullWidth
            value={data}
            onChange={(_, item) => item && typeof item !== 'string' && onChange && onChange(item.value)}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            disabled={disabled}
            options={list}
            renderInput={(params) => <TextField {...params} placeholder={placeholder} required={required} />}
        />
    );
}

export type InputAutoCompleteValue = {
    value: string;
    label: string;
}

interface InputAutoCompleteProps {
    required?: boolean;
    name: string;
    defaultValue?: string;
    placeholder?: string;
    list?: InputAutoCompleteValue[];
    disabled?: boolean;
    onChange?: (value: string) => void;
}

function setData(result: InputAutoCompleteValue) {
    throw new Error("Function not implemented.");
}
