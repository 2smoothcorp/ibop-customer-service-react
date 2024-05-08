import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { UseFormRegister } from "react-hook-form";

export default function InputAutoComplete({
    name,
    value,
    defaultValue,
    placeholder,
    className,
    register,
    required = false,
    list = [],
    disabled = false,
    onChange,
}: InputAutoCompleteProps) {
    const [data, setData] = React.useState<InputAutoCompleteValue | null>(null);

    useMemo(() => {
        if (defaultValue && list.length > 0) {
            setData(list.find(item => item.value === defaultValue) || null)
        }
    }, [defaultValue, list]);

    useEffect(() => {
        if (data && onChange) {
            onChange(data.value)
        }
    }, [data, onChange])

    return (
        <Autocomplete
            fullWidth
            value={data}
            onChange={(_, item) => setData(item)}
            defaultValue={list.find(item => item.value === defaultValue) || null}
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
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    register?: UseFormRegister<any>;
    list?: InputAutoCompleteValue[];
    disabled?: boolean;
    onChange?: (value: string) => void;
}