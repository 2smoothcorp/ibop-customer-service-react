import { AddressBySearchProps } from "@/utils/function";
import { Autocomplete, Box, TextField } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { UseFormRegister } from "react-hook-form";

export default function InputAddressThailand({
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
    optionType = 'postCode',
}: InputAddressThailandProps) {
    const [data, setData] = React.useState<AddressBySearchProps | null>(null);

    useMemo(() => {
        // if (defaultValue && list.length > 0) {
        //     setData(list.find(item => item.value === defaultValue) || null)
        // }
    }, [defaultValue, list]);

    useEffect(() => {
        // if (data && onChange) {
        //     onChange(data.value)
        // }
    }, [data, onChange])

    const getOption = (option: AddressBySearchProps) => {
        switch (optionType) {
            case 'postCode':
                return option.value.postCode;
            case 'province':
                return option.value.province;
            case 'district':
                return option.value.district;
            case 'subDistrict':
                return option.value.subDistrict;
        }
    }

    return (
        <Autocomplete
            value={value || defaultValue}
            fullWidth
            // value={data}
            // onChange={(_, item) => setData(item)}
            // defaultValue={list.find(item => item.value === defaultValue) || null}
            disabled={disabled}
            options={list}
            getOptionLabel={(option) => getOption(option)}
            renderOption={(props, option) => (
                <Box component="li" {...props} key={`${name}`}>
                    {option.label}
                </Box>
            )}
            renderInput={(params) => <TextField {...params} placeholder={placeholder} required={required} />}
        />
    );
}

interface InputAddressThailandProps {
    required?: boolean;
    name: string;
    value?: AddressBySearchProps;
    defaultValue?: AddressBySearchProps;
    placeholder?: string;
    className?: string;
    register?: UseFormRegister<any>;
    list?: AddressBySearchProps[];
    disabled?: boolean;
    onChange?: (value: string) => void;
    optionType?: 'postCode' | 'province' | 'district' | 'subDistrict';
}