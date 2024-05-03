import { AddressBySearchProps } from "@/utils/function";
import { Autocomplete, Box, TextField } from "@mui/material";

export default function InputAddressThailand({
    name,
    defaultValue,
    placeholder,
    required = false,
    list = [],
    disabled = false,
    onChange,
    onChangeText,
    optionType = 'postCode',
}: InputAddressThailandProps) {

    const getOption = (option: AddressBySearchProps | null | string): string => {
        if (!option || typeof option === 'string') return '';
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

    if (!defaultValue) return <></>

    return (
        <Autocomplete
            value={defaultValue}
            fullWidth
            isOptionEqualToValue={(option, value) => option.value.subDistrictCode === value.value.subDistrictCode}
            onInputChange={(_, value) => onChangeText && onChangeText(value)}
            onChange={(_, item) => typeof item !== 'string' && item && onChange && onChange(item)}
            filterOptions={(x) => x}
            disabled={disabled}
            options={list}
            freeSolo
            getOptionLabel={(option) => getOption(option)}
            renderOption={(props, option) => (
                <Box component="li" {...props}
                    key={option.label}
                >
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
    defaultValue?: AddressBySearchProps;
    placeholder?: string;
    list?: AddressBySearchProps[];
    disabled?: boolean;
    onChange?: (value: AddressBySearchProps) => void;
    onChangeText?: (value: string) => void;
    optionType?: 'postCode' | 'province' | 'district' | 'subDistrict';
}