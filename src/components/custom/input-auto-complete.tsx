import { Autocomplete, TextField } from "@mui/material";
import { useMemo } from "react";

export default function InputAutoComplete({
    name,
    defaultValue,
    placeholder,
    required = false,
    list = [],
    disabled = false,
    onChange,
}: InputAutoCompleteProps) {

    const defaultValueItem = useMemo(() => list.find(item => item.value === defaultValue) || null, [defaultValue, list]);

    // console.log(defaultValueItem)

    // const [data, setData] = React.useState<InputAutoCompleteValue | null>(null);

    // useEffect(() => {
    //     if (defaultValue && list.length > 0 && data === null) {
    //         const result = list.find(item => item.value === defaultValue)
    //         if (result) {
    //             setData(result);
    //         }
    //     }
    // }, [defaultValue, list, data]);


    // useEffect(() => {
    //     if (data && onChange) {
    //         onChange(data.value)
    //     }
    // }, [data, onChange])

    if (!defaultValueItem) return <></>

    return (
        <Autocomplete
            // id={name}
            fullWidth
            // value={defaultValue}
            onChange={(_, item) => item && typeof item !== 'string' && onChange && onChange(item.value)}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            defaultValue={defaultValueItem}
            // getOptionLabel={(option) => option.value}
            // renderOption={(props, option) => (
            //     <Box component="li" {...props}
            //         key={option.label}
            //     >
            //         {option.value} - {option.label}
            //     </Box>
            // )}
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