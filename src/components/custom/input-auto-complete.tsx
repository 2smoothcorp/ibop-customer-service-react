import { Autocomplete, TextField } from "@mui/material";
import React, { useMemo } from "react";

export default function InputAutoComplete({
    name,
    defaultValue,
    placeholder,
    required = false,
    list = [],
    disabled = false,
    onChange,
}: InputAutoCompleteProps) {

    const [data, setData] = React.useState<InputAutoCompleteValue | null>(null);

    useMemo(() => {
        if (defaultValue && list.length > 0 && data === null) {
            const result = list.find(item => item.value === defaultValue)
            if (result) {
                setData(result);
            }
        }
    }, [defaultValue, list, data]);


    useMemo(() => {
        if (data && onChange) {
            onChange(data.value)
        }
    }, [data, onChange])

    if (!data) return <></>

    return (
        <Autocomplete
            // id={name}
            fullWidth
            value={data}
            onChange={(_, item) => setData(item)}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            // defaultValue={dValue()}
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